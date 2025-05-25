<template>
	<p-fixed-topbar>
		<!-- <p-tab-button :now="brop($tabNow == 'main')">概览</p-tab-button> -->
	</p-fixed-topbar>


	<p-fixed-sidebar>
		<p-split>档案管理</p-split>
		<p-series>
			<Click option-button text="创建" @click="creatingProfile" />
			<Click option-button text="导入" @click="importingProfile" />
		</p-series>
		<p-series class="mt-1">
			<Click option-button text="切换主题" white @click="toggleTheme" />
		</p-series>
		<p-split>版本</p-split>
		<p-text>v{{ version }}</p-text>
		<p-split>XMLHttpRequest</p-split>

		<p-text>
			<span>{{ hasXHRGM ? '✔ 存在' : '✖ 不存在' }}</span>
			<span class="float-right text-xs leading-8 cursor-pointer text-[var(--cMain)]" @click="showedTipsXHRGM = !showedTipsXHRGM">(这是什么?)</span>
		</p-text>
		<div v-if="showedTipsXHRGM" class="p-2 text-xs border-2 border-[var(--cGray)] whitespace-pre-line">
			跃迁分析需要跨域名访问米哈游的接口，但现代浏览器出于安全考虑限制了跨域名请求。为此需要安装油猴子GreaseMonkey或篡改猴Tampermonkey等插件，并将其GM_xmlhttpRequest函数暴露到该网页的window中。
		</div>
	</p-fixed-sidebar>

	<p-main-box>
		<p-profile v-for="(profile, indexProfile) of $profiles" :key="profile.id">
			<p-info>档案{{ indexProfile + 1 }} &lt;{{ profile.nick }}&gt; {{ profile.id }}</p-info>
			<p-info>开拓者：{{ profile.name }}（{{ profile.uid }}）</p-info>
			<p-info>开拓等级：{{ profile.level }}级，均衡{{ profile.levelWorld }}</p-info>
			<p-info>
				角色：共解锁{{ profile.sizeCharacter }}位角色，{{ profile.countAchievement }}{{ renderLocalAchievementCount(profile) }}个成就
			</p-info>
			<p-info>总抽卡次数：{{ profile.logsParsed.length }}</p-info>
			<p-info v-if="profile.timeFetchFirst">初次获取时间：{{ profile.timeFetchFirst }} ({{ Day(profile.timeFetchFirst).fromNow() }})</p-info>
			<p-info v-if="profile.timeFetchLast">最后获取时间：{{ profile.timeFetchLast }} ({{ Day(profile.timeFetchLast).fromNow() }})</p-info>
			<p-info v-if="profile.logsParsed[0]?.time">最后抽卡时间：{{ Day(profile.logsParsed[0]?.time, 'X').format() }} ({{ Day(profile.logsParsed[0]?.time, 'X').fromNow() }})</p-info>

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

	<dialog ref="$$dialogEditorProfile">
		<Texter v-model="$profileEditing.id" item class="!block !w-[50vw]" label-width="6rem" label="档案ID" place="档案ID不能为空" :readonly="brop($modeProfileEditor == 'modify')" />
		<Texter v-model="$profileEditing.nick" item class="!block !w-[50vw]" label-width="6rem" label="档案名" place="若使用[创建并获取]可留空，会默认填入开拓者名称" />
		<Textbox v-model="$profileEditing.urlLog" item class="!block !w-[50vw] !h-24" label-width="6rem" label="日志URL" />

		<p-split class="block mt-4" />
		<Click v-if="$modeProfileEditor == 'create'" item _right text="创建并获取" @click="createProfile($profileEditing, true)" />
		<Click v-if="$modeProfileEditor == 'create'" item _right text="仅创建" @click="createProfile($profileEditing, false)" />

		<Click v-if="$modeProfileEditor == 'modify'" item _right text="更新并获取" @click="modifyProfile($profileEditing, true)" />
		<Click v-if="$modeProfileEditor == 'modify'" item _right text="仅更新" @click="modifyProfile($profileEditing, false)" />
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
			v-for="key of keysLogsRaw" :key="key"
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
</template>

<script setup>
import { ref } from 'vue';
import { faStarOfDavid, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { v7 as uuid } from 'uuid';

import { tabAdmin } from '@nuogz/vue-sidebar';
import { Click, Texter, Textbox, FileDragger } from '@nuogz/vue-components';
import { $fail, $quest, $quest3 } from '@nuogz/vue-alert';

import Day from '../lib/day.js';

import fetchLog from './fetch-log.js';

import { PA } from './admin.js';
import updateSidebar from '../lib/update-sidebar.js';
import fetchText from './fetch-text.js';



/* global PACKAGE_VERSION */
const version = PACKAGE_VERSION;

/** @type {typeof GM_xmlhttpRequest} */
const XMLHttpRequestGM = window['GM_xmlhttpRequest'];

const showedTipsXHRGM = ref(false);
const hasXHRGM = typeof XMLHttpRequestGM == 'function';


const $profiles = PA.$profiles;





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
const $$dialogEditorProfile = ref(null);
const $profileEditing = ref({});
const $modeProfileEditor = ref('');

const creatingProfile = () => {
	$profileEditing.value = {
		id: uuid(),
		nick: '',
		urlLog: '',
	};

	$modeProfileEditor.value = 'create';

	$$dialogEditorProfile.value.showModal();
};
const modifingProfile = profile => {
	$profileEditing.value = {
		id: profile.id,
		nick: profile.nick,
		urlLog: '',
		profile,
	};

	$modeProfileEditor.value = 'modify';

	$$dialogEditorProfile.value.showModal();
};
const deletingProfile = async profile => {
	if(!await $quest(`确定要删除档案【${profile.nick || profile.name || profile.uid || profile.id}】吗？\n这是不可恢复不可撤回的操作！`, '删除档案', { text: '删除档案！', value: true }, { text: '不了不了', value: false, reverse: true })) { return; }

	const index = $profiles.value.indexOf(profile);

	if(~index) {
		$profiles.value.splice(index, 1);
		PA.save();

		const idProfileLast = localStorage.getItem('last-profile-id');

		if(idProfileLast == profile.id) { localStorage.removeItem('last-profile-id'); }

		updateSidebar(false);
	}
};

const createProfile = async (profileRaw, willFetchLog) => {
	const idRaw = profileRaw.id?.trim();
	const nickRaw = profileRaw.nick?.trim();
	const urlLogRaw = profileRaw.urlLog?.trim();

	if(!idRaw) { return $fail('创建档案', Error('档案ID不能为空')); }
	if(!nickRaw && !urlLogRaw) { return $fail('创建档案', Error('档案名称和日志URL不能同时为空')); }

	try {
		const urlLog = urlLogRaw ? new URL(urlLogRaw) : null;


		const profile = {
			id: profileRaw.id,
			nick: nickRaw,
			uid: null,


			keyAuth: urlLog?.searchParams.get('authkey'),
			versionKeyAuth: urlLog?.searchParams.get('authkey_ver'),

			timeFetchFirst: null,
			timeFetchLast: null,
			sizeCharacter: 0,
			countAchievement: 0,
			name: '',
			level: 0,
			levelWorld: 0,

			logsParsed: [],
			infosAchievementPlayer$id: {},
		};

		$profiles.value.push(profile);
		PA.save();
		updateSidebar(false);


		if(willFetchLog) { await fetchProfileLogs(profile, true); }


		$$dialogEditorProfile.value.close();
	}
	catch(error) {
		$fail('创建档案', error);
	}
};
const modifyProfile = async (profileRaw, willFetchLog) => {
	const profile = profileRaw.profile;

	try {
		if(profileRaw.urlLog?.trim()) {
			const urlLog = new URL(profileRaw.urlLog);

			profile.keyAuth = urlLog.searchParams.get('authkey');
			profile.versionKeyAuth = urlLog.searchParams.get('authkey_ver');
		}

		profile.nick = profileRaw.nick;


		PA.save();
		updateSidebar(false);


		if(willFetchLog) { await fetchProfileLogs(profile, false); }


		$$dialogEditorProfile.value.close();
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

const importProfile = async textJSON => {
	try {
		const profiles = $profiles.value;

		/** @type {import('./admin.js').Profile} */
		const profile = JSON.parse(textJSON);
		if(typeof profile != 'object' || !profile) { throw Error('导入档案的数据类型不是Object'); }


		let changedProfile = false;

		const indexProfileSame = profiles.findIndex(p => p.id == profile.id);
		if(~indexProfileSame) {
			const result = await $quest3('发现相同ID的档案，如何处理？', '询问', { text: '覆盖', value: 'replace' }, { text: '追加（ID会变）', value: 'append' });
			if(result == 'replace') {
				profiles.splice(indexProfileSame, 1, profile);

				changedProfile = true;
			}
			else if(result == 'append') {
				profile.id = uuid();
				profiles.push(profile);

				changedProfile = true;
			}
		}
		else {
			profiles.push(profile);

			changedProfile = true;
		}


		if(changedProfile) {
			PA.save();
			updateSidebar(false);
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


		if(info?.player && info?.player?.uid == uid) {
			profile.nick = profile.nick || info?.player?.nickname;
			profile.name = info?.player?.nickname ?? profile.name;
			profile.level = info?.player?.level ?? profile.level;
			profile.levelWorld = info?.player?.world_level ?? profile.levelWorld;
			profile.sizeCharacter = info?.player?.space_info?.avatar_count ?? profile.sizeCharacter;
			profile.countAchievement = info?.player?.space_info?.achievement_count ?? profile.countAchievement;
		}


		if(willFetchSolo) {
			PA.save();

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

			await fetchProfileBase(profile);
		}

		localStorage.setItem(`logsRaw-${profile.uid}-${Day().format('YYMMDDHHmmss')}`, JSON.stringify(logsRaw));

		PA.save();


		dialogProgress.value.close();
	}
	catch(error) {
		textProgress.value = error?.message ?? error;
	}
};



const exportProfile = profile => {
	const a = document.createElement('a');
	a.download = `sr-note@${profile.uid}@${profile.nick != profile.name && profile.nick ? `${profile.name} (${profile.nick})` : profile.name}-${Day().format('YYMMDD HHmmss')}.json`;
	a.href = URL.createObjectURL(new Blob([JSON.stringify(profile, 'null', '\t')]));

	a.click();
};


const analyseProfile = profile => tabAdmin.changeOrAdd('gacha-analysis', { type: 'icon|title', title: '跃迁分析', icon: faStarOfDavid, reason: 'profile-manager-open' }, profile.id);
const manageAchievement = profile => tabAdmin.changeOrAdd('achievement-manager', { type: 'icon|title', title: '成就管理', icon: faTrophy }, profile.id);


const toggleTheme = () => {
	const root = document.querySelector(':root');

	root.setAttribute('color-scheme', root.getAttribute('color-scheme') == 'dark' ? 'light' : 'dark');
};



const renderLocalAchievementCount = profile => {
	const countAchievementFinishedLocal = Object.values(profile.infosAchievementPlayer$id).filter(a => a.status == 1).length;

	return profile.countAchievement != countAchievementFinishedLocal && countAchievementFinishedLocal ? `(${countAchievementFinishedLocal}本地)` : '';
};
</script>


<style lang="sass" scoped>
p-fixed-topbar
	@apply block px-2 leading-8 fixed top-0 w-full h-8 z-50 shadow-mdd bg-[var(--cBackSideBar)] whitespace-nowrap cursor-pointer
	p-tab-button
		@apply inblock px-2
		&:hover, &[now]
			@apply border-b-2 border-[var(--cMain)]

p-fixed-sidebar
	@apply block p-4 leading-8 fixed top-8 right-0 w-56 h-[calc(100%-var(--spc)*8)] z-50 shadow-mdd bg-[var(--cBackSideBar)] whitespace-nowrap

	>[item]
		@apply block w-full mr-4 h-8 leading-8 mb-2 text-sm

	p-split
		@apply block w-full my-2 text-base text-[var(--cMain)]
		@apply relative left-[calc(var(--spc)*-2)]
	p-text
		@apply block h-8 leading-8
	p-jump
		@apply block w-full my-2 text-sm cursor-pointer select-none
		&:hover
			@apply text-[var(--cMain)] text-base
	p-series
		@apply flex flex-wrap gap-0.5
		[option-button]
			@apply flex-1 min-w-max text-sm px-2
			@apply border border-[var(--cMain)] h-8 lead-b1-8
	p-options
		@apply flex flex-wrap gap-0
		[option-button]
			@apply flex-1 min-w-max text-sm px-2 rounded-none
			@apply border border-[var(--cMain)] h-8 lead-b1-8
			&:first-child
				@apply rounded-l-sm
			&:last-child
				@apply rounded-r-sm

p-main-box
	@apply relative p-4 leading-8 top-8
	@apply grid grid-cols-1 gap-2

p-profile
	@apply block border-2 border-[var(--cGray)] mb-4 p-4 w-[1080px]
	p-info
		@apply block whitespace-nowrap elli

dialog
	@apply p-2 text-[var(--cText)] shadow-mdd rounded-sm outline-none
	background-color: color-mix(in srgb, var(--cBack) 90%, white)
	>[item]
		@apply inblock w-auto mx-2 my-2 h-8 leading-8
		&[_right]
			@apply float-right
		&[white]
			@apply lead-b2-8

p-raw-logs-option
	@apply block p-2 my-2 cursor-pointer select-none rounded-sm w-fit
	&[selected]
		@apply bg-[var(--cBack)] text-[var(--cText)]

</style>
