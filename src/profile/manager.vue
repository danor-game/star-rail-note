<template>
	<module>
		<p-fixed-topbar>
			<Click item class="!w-32" text="创建档案" @click="creatingProfile" />
			<Click item class="!w-32" text="导入档案" @click="importingProfile" />
			<Click item class="!w-32" text="切换主题" white @click="toggleTheme" />
			<p-version>v1.2.3.0229</p-version>
		</p-fixed-topbar>
		<p-main-box>
			<p-gm-xhr-result class="block mb-4">● GreaseMonkey XMLHttpRequest：{{ hasXHRGM ? '✔ 存在' : '✖ 不存在' }}</p-gm-xhr-result>

			<p-profile v-for="(profile, indexProfile) of $profiles" :key="`profile-${profile.uid || indexProfile}`">
				<p-info>档案{{ indexProfile + 1 }} &lt;{{ profile.nick }}&gt;</p-info>
				<p-info>&nbsp;&nbsp;&nbsp;&nbsp;- {{ profile.name }}（{{ profile.uid }}）</p-info>
				<p-info>&nbsp;&nbsp;&nbsp;&nbsp;- {{ profile.level }}级，均衡{{ profile.levelWorld }}</p-info>
				<p-info>&nbsp;&nbsp;&nbsp;&nbsp;- 共解锁{{ profile.sizeCharacter }}位角色，{{ profile.countAchievement }}个成就</p-info>
				<p-info>总抽卡次数：{{ profile.logsParsed.length }}</p-info>
				<p-info>初次获取时间：{{ profile.timeFetchFirst }} ({{ Day(profile.timeFetchFirst).fromNow() }})</p-info>
				<p-info>最后获取时间：{{ profile.timeFetchLast }} ({{ Day(profile.timeFetchLast).fromNow() }})</p-info>
				<p-info>最后抽卡时间：{{ Day(profile.logsParsed[0]?.time, 'X').format() }} ({{ Day(profile.logsParsed[0]?.time, 'X').fromNow() }})</p-info>

				<Click item class="float-right mt-4 ml-4 h-8" text="跃迁分析" @click.exact="analyseProfile(profile)" />
				<Click item class="float-right mt-4 ml-4 h-8" text="成就管理" @click.exact="manageAchievement(profile)" />
				<span item class="float-right mt-4 ml-4 h-8">|</span>
				<Click
					v-tip="'默认-增量获取\nalt-完整获取\nctrl-只获取基础信息'"
					item class="float-right mt-4 ml-4 h-8" text="获取记录"
					@click.exact="fetchProfileLogs(profile, false)"
					@click.alt="fetchProfileLogs(profile, true)"
					@click.ctrl="fetchProfileBase(profile, true)"
				/>
				<span item class="float-right mt-4 ml-4 h-8">|</span>
				<Click item class="float-right mt-4 ml-4 h-8" text="更新档案" @click.exact="modifingProfile(profile)" />
				<Click item class="float-right mt-4 ml-4 h-8" text="导出档案" @click="exportProfile(profile)" />
				<span item class="float-right mt-4 ml-4 h-8">|</span>
				<Click v-if="profile.uid" item class="float-right mt-4 ml-4 h-8 lead-b2-8" text="管理原始数据" white @click="showRawLogs(profile)" />
				<Click item class="float-right mt-4 ml-4 h-8 lead-b2-8" text="删除档案" white @click="deletingProfile(profile)" />
				<div class="clear-both" />
			</p-profile>
		</p-main-box>

		<dialog ref="dialogEditorProfile">
			<Texter v-model="$profileEditing.nick" item class="!block !w-[50vw]" label-width="6rem" label="档案名" place="可留空，显示最新角色名称" :readonly="brop(modeProfileEditor == 'modify')" />
			<Textbox v-model="$profileEditing.urlLog" item class="!block !w-[50vw] !h-24" label-width="6rem" label="日志URL" />

			<p-split class="block mt-4" />
			<Click v-if="modeProfileEditor == 'create'" item _right text="创建并获取" @click="createProfile($profileEditing, true)" />
			<Click v-if="modeProfileEditor == 'create'" item _right text="仅创建" @click="createProfile($profileEditing, false)" />

			<Click v-if="modeProfileEditor == 'modify'" item _right text="更新并获取" @click="modifyProfile($profileEditing, true)" />
			<Click v-if="modeProfileEditor == 'modify'" item _right text="仅更新" @click="modifyProfile($profileEditing, false)" />
		</dialog>
		<dialog ref="dialogEditorProfileImport" @paste="readProfileFilePaste">
			<Textbox v-model="$profileImporting.json" item class="!block !w-[50vw] !h-24" label-width="6rem" label="档案JSON" />
			<FileDragger v-model="$profileImporting.files" item class="!block !w-[50vw] !h-24"
				label-width="6rem" label="档案文件" accept=".json" drag-label="拖入 <档案JSON文件> 到此" dragging-label="松开即读入 <档案JSON>"
				@update:model-value="readProfileFile"
			/>

			<p-split class="block mt-4" />
			<Click item class="float-right mt-4" text="导入创建" @click="importProfile($profileImporting.json)" />
		</dialog>

		<dialog ref="dialogLogsRaw">
			<div class="text-lg">{{ uidLogsRaw }}的原始记录</div>
			<div class="text-xs mb-1">- 从官方接口获取到原始数据，仅以UID和获取时间分类，不以档案分类</div>
			<div class="text-xs mb-4">- 理论上其他分析应用可以通过导入原始数据直接进行分析（如果它们提供导入的话）</div>

			<p-raw-logs-option
				v-for="key of keysLogsRaw" :key="`key-logs-raw-${key}`"
				:selected="brop(key.selected)"
				@click="key.selected = !key.selected"
			>
				<span>{{ key.selected ? '✔' : '○' }}</span> {{ key.key }}
			</p-raw-logs-option>

			<Click item class="float-right mt-4" text="导出" @click="createProfile($profileEditing, true)" />
			<Click item class="float-right mt-4" text="合并去重" @click="createProfile($profileEditing, true)" />
			<Click item class="float-right mt-4" text="删除" white @click="createProfile($profileEditing, true)" />
		</dialog>

		<dialog ref="dialogProgress">
			{{ textProgress }}
		</dialog>
	</module>
</template>

<script setup>
	import { ref } from 'vue';
	import { faStarOfDavid, faTrophy } from '@fortawesome/free-solid-svg-icons';

	import { tabAdmin } from '@nuogz/vue-sidebar';
	import { Click, Texter, Textbox, FileDragger } from '@nuogz/vue-components';
	import { $fail, $quest } from '@nuogz/vue-alert';

	import Day from '../lib/day.pure.js';

	import fetchLog from './fetch-log.js';
	import loadProfiles from './load-profiles.js';
	import saveProfiles from './save-profiles.js';



	/** @type {typeof GM_xmlhttpRequest} */
	const XMLHttpRequestGM = window.XMLHttpRequestGM;

	const hasXHRGM = typeof XMLHttpRequestGM == 'function';


	const fetchText = async (url, method = 'GET', option, willReturnResponse = false) => new Promise((resolve, reject) =>
		XMLHttpRequestGM(Object.assign({}, option, {
			method,
			url,

			onload(response) { resolve(willReturnResponse ? response : response.responseText); },
			onerror(error) { reject(error); }
		})));


	/** @type {import('vue').Ref<any[]>} */
	const $profiles = ref(loadProfiles());





	/** @type {import('vue').Ref<HTMLDialogElement>} */
	const dialogLogsRaw = ref(null);
	const uidLogsRaw = ref('');
	const keysLogsRaw = ref([]);
	const showRawLogs = profile => {
		uidLogsRaw.value = profile.uid;

		keysLogsRaw.value = Object.keys(localStorage).filter(key => key.startsWith(`logsRaw-${profile.uid}`)).map(key => ({
			key,
			selected: false
		}));


		dialogLogsRaw.value.showModal();
	};



	/** @type {import('vue').Ref<HTMLDialogElement>} */
	const dialogProgress = ref(null);
	const textProgress = ref('');



	/** @type {import('vue').Ref<HTMLDialogElement>} */
	const dialogEditorProfile = ref(null);
	const $profileEditing = ref({});
	const modeProfileEditor = ref('');

	const creatingProfile = () => {
		$profileEditing.value = {
			nick: '',
			urlLog: '',
		};

		modeProfileEditor.value = 'create';

		dialogEditorProfile.value.showModal();
	};
	const modifingProfile = profile => {
		$profileEditing.value = {
			nick: profile.nick,
			urlLog: '',
			profile,
		};

		modeProfileEditor.value = 'modify';

		dialogEditorProfile.value.showModal();
	};
	const deletingProfile = async profile => {
		if(!await $quest(`确定要删除档案【${profile.name}】（${profile.uid}）\n这是不可恢复不可撤回的操作！`, '删除档案', { text: '删除档案！', value: true }, { text: '不了不了', value: false, reverse: true })) { return; }

		const index = $profiles.value.indexOf(profile);

		if(~index) {
			$profiles.value.splice(index, 1);
			saveProfiles($profiles.value);
		}
	};

	const createProfile = async (profileRaw, willFetchLog) => {
		try {
			const urlLog = new URL(profileRaw.urlLog);


			const profile = {
				nick: profileRaw.nick,
				name: '',
				uid: null,
				keyAuth: urlLog.searchParams.get('authkey'),
				versionKeyAuth: urlLog.searchParams.get('authkey_ver'),
				logsParsed: [],
				timeFetchFirst: null,
				timeFetchLast: null,
			};

			$profiles.value.push(profile);
			saveProfiles($profiles.value);


			if(willFetchLog) { await fetchProfileLogs(profile, true); }


			dialogEditorProfile.value.close();
		}
		catch(error) {
			$fail('创建档案', error);
		}
	};
	const modifyProfile = async (profileRaw, willFetchLog) => {
		try {
			const urlLog = new URL(profileRaw.urlLog);


			profileRaw.profile.keyAuth = urlLog.searchParams.get('authkey');
			profileRaw.profile.versionKeyAuth = urlLog.searchParams.get('authkey_ver');


			saveProfiles($profiles.value);


			if(willFetchLog) { await fetchProfileLogs(profileRaw.profile, false); }


			dialogEditorProfile.value.close();
		}
		catch(error) {
			$fail('创建档案', error);
		}
	};


	/** @type {import('vue').Ref<HTMLDialogElement>} */
	const dialogEditorProfileImport = ref(null);
	const $profileImporting = ref({ json: '', files: [] });

	const importingProfile = () => {
		$profileImporting.value.json = '';


		dialogEditorProfileImport.value.showModal();
	};

	const importProfile = textJSON => {
		try {
			const profile = JSON.parse(textJSON);

			if(profile && typeof profile == 'object') {
				$profiles.value.push(profile);

				saveProfiles($profiles.value);
			}
			else {
				throw Error('导入的JSON数据类型不是Object');
			}
		}
		catch(error) {
			$fail('导入档案', error);
		}


		dialogEditorProfileImport.value.close();
	};

	const readProfileFile = () => {
		/** @type {File} */
		const file = $profileImporting.value.files[0];


		const reader = new FileReader();
		reader.addEventListener('load', event => $profileImporting.value.json = event.target.result);
		reader.readAsText(file);
	};

	const readProfileFilePaste = $event => {
		/** @type {File} */
		const file = $event?.clipboardData?.files?.[0];

		if(!file) { return; }


		const reader = new FileReader();
		reader.addEventListener('load', event => $profileImporting.value.json = event.target.result);
		reader.readAsText(file);
	};



	const fetchProfileBase = async (profile, willFetchSolo = false) => {
		textProgress.value = '正在获取基础信息...';

		if(willFetchSolo) { dialogProgress.value.showModal(); }


		try {
			const { uid } = profile;

			const info = JSON.parse(await fetchText(`https://api.mihomo.me/sr_info_parsed/${uid}`));

			profile.nick = profile.nick || info?.player?.nickname;
			profile.name = info?.player?.nickname;
			profile.level = info?.player?.level;
			profile.levelWorld = info?.player?.world_level;
			profile.sizeCharacter = info?.player?.space_info?.avatar_count ?? 0;
			profile.countAchievement = info?.player?.space_info?.achievement_count ?? 0;


			if(willFetchSolo) {
				saveProfiles($profiles.value);

				dialogProgress.value.close();
			}
		}
		catch(error) {
			textProgress.value = error?.message ?? error;
		}
	};
	const fetchProfileLogs = async (profile, willFetchFull = false) => {
		textProgress.value = '开始更新...';

		dialogProgress.value.showModal();


		try {
			const { logsRaw } = await fetchLog(profile, willFetchFull, textProgress);


			if(logsRaw[0]) {
				profile.uid = logsRaw[0].uid;

				fetchProfileBase(profile);
			}

			localStorage.setItem(`logsRaw-${profile.uid}-${Day().format('YYMMDDHHmmss')}`, JSON.stringify(logsRaw));

			saveProfiles($profiles.value);


			dialogProgress.value.close();
		}
		catch(error) {
			textProgress.value = error?.message ?? error;
		}
	};



	const exportProfile = profile => {
		const a = document.createElement('a');
		a.download = `profile-${profile.uid}-${profile.nick != profile.name ? `${profile.name} (${profile.nick})` : profile.name}-${Day().format('YYMMDD HHmmss')}.json`;
		a.href = URL.createObjectURL(new Blob([JSON.stringify(profile)]));

		a.click();
	};


	const analyseProfile = profile => tabAdmin.add('gacha-analysis', { type: 'icon|title', title: '跃迁分析', icon: faStarOfDavid }, profile.uid);
	const manageAchievement = profile => tabAdmin.add('achievement-manager', { type: 'icon|title', title: '成就管理', icon: faTrophy }, profile.uid);


	const toggleTheme = () => document.querySelector(':root').classList.toggle('color-scheme-dark');
</script>


<style lang="sass" scoped>
module
	@apply relative
	--heightTopbar: 4rem


p-fixed-topbar
	@apply block p-4 leading-8 fixed h-16 z-50 shadow-mdd bg-[var(--cBack)] overflow-hidden
	width: calc( 100% - var(--widthSidebar))
	&:hover
		@apply h-auto
	>[item]
		@apply inblock w-auto mr-4 h-8 leading-8 mb-2


p-main-box
	@apply relative block p-4 leading-8 top-[var(--heightTopbar)]


dialog
	@apply p-2 text-[var(--cTextBack)] shadow-mdd rounded-sm outline-none
	background-color: color-mix(in srgb, var(--cBack) 90%, white)
	>[item]
		@apply inblock w-auto mx-2 my-2 h-8 leading-8
		&[_right]
			@apply float-right
		&[white]
			@apply lead-b2-8

p-profile
	@apply block border border-[var(--cBorderBack)] rounded-sm mb-4 p-4
	p-info
		@apply block whitespace-nowrap elli


p-raw-logs-option
	@apply block p-2 my-2 cursor-pointer select-none rounded-sm w-fit
	&[selected]
		@apply bg-[var(--cBack)] text-[var(--cTextBack)]
</style>
