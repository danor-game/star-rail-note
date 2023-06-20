<template>
	<module>
		<p-fixed-topbar>
			<Click item class="!w-32" text="创建档案" @click="creatingProfile" />
		</p-fixed-topbar>
		<p-main-box>
			<p-gm-xhr-result class="block mb-4">● GreaseMonkey XMLHttpRequest：{{ hasXHRGM ? '✔ 存在' : '✖ 不存在' }}</p-gm-xhr-result>

			<p-profile v-for="(profile, indexProfile) of $profiles" :key="`profile-${profile.uid || indexProfile}`">
				<p-info>{{ profile.name }}（{{ profile.uid }}）</p-info>
				<p-info>○ {{ profile.level }}级（均衡{{ profile.levelWorld }}）</p-info>
				<p-info>○ 共解锁{{ profile.sizeCharacter }}位角色，{{ profile.countAchievement }}个成就</p-info>
				<p-info>总抽卡次数：{{ profile.logsParsed.length }}</p-info>
				<p-info>初次获取时间：{{ profile.timeFetchFirst }}</p-info>
				<p-info>最后获取时间：{{ profile.timeFetchLast }}</p-info>

				<Click item class="float-right mt-4 ml-4 h-8" text="获取档案" @click="fetchLogs(profile)" />
				<Click item class="float-right mt-4 ml-4 h-8" text="删除档案" white @click="deletingProfile(profile)" />
				<div class="clear-both" />
			</p-profile>
		</p-main-box>

		<dialog ref="dialogProfileCreate" create-profile>
			<Texter v-model="$profileCreating.nick" item class="!block !w-[50vw]" label-width="6rem" label="档案名" place="可留空，显示最新角色名称" />
			<Textbox v-model="$profileCreating.urlLog" item class="!block !w-[50vw] !h-24" label-width="6rem" label="日志URL" />

			<Click item class="float-right mt-4" text="创建档案并获取数据" @click="createProfile($profileCreating, true)" />
			<Click item class="float-right mt-4" text="仅创建档案" @click="createProfile($profileCreating, false)" />
		</dialog>
	</module>
</template>

<script setup>
	import { ref } from 'vue';

	import { Click, Texter, Textbox } from '@nuogz/vue-components';
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



	const $profiles = ref(loadProfiles());





	/** @type {import('vue').Ref<HTMLDialogElement>} */
	const dialogProfileCreate = ref(null);
	const $profileCreating = ref({});
	const creatingProfile = () => {
		$profileCreating.value = {
			nick: '',
			urlLog: '',
		};

		dialogProfileCreate.value.showModal();
	};
	const createProfile = async (profileCreating, willFetch) => {
		try {
			const urlLog = new URL(profileCreating.urlLog);


			const profile = {
				nick: profileCreating.nick,
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


			if(willFetch) { await fetchLogs(profile); }

			dialogProfileCreate.value.close();
		}
		catch(error) {
			$fail('创建档案', error);
		}
	};
	const deletingProfile = async profile => {
		if(!await $quest(`确定要删除档案【${profile.name}】（${profile.uid}）\n这是不可恢复不可撤回的操作！`, '删除档案', { text: '删除档案！', value: true }, { text: '不了不了', value: false, reverse: true })) { return; }

		const index = $profiles.value.indexOf(profile);

		if(~index) {
			$profiles.value.splice(index, 1);
			saveProfiles($profiles.value);
		}
	};


	const fetchLogs = async profile => {
		const { logsRaw } = await fetchLog(profile);


		if(logsRaw[0]) {
			const uid = profile.uid = logsRaw[0].uid;

			const info = JSON.parse(await fetchText(`https://api.mihomo.me/sr_info_parsed/${uid}`));

			profile.name = info?.player?.nickname;
			profile.level = info?.player?.level;
			profile.levelWorld = info?.player?.world_level;
			profile.sizeCharacter = info?.player?.space_info?.avatar_count ?? 0;
			profile.countAchievement = info?.player?.space_info?.achievement_count ?? 0;
		}

		localStorage.setItem(`logsRaw-${Day().format('YYMMDDHHmmss')}`, JSON.stringify(logsRaw));

		saveProfiles($profiles.value);
	};
</script>


<style lang="sass" scoped>
module
	@apply relative

	--heightTopbar: 4rem


p-fixed-topbar
	@apply fixed block w-full h-[var(--heightTopbar)] p-4 leading-8 z-50 shadow-mdd
	background-color: var(--colorBackground)

	>[item]
		@apply inblock w-auto mr-4 h-8 leading-8 mb-2


p-main-box
	@apply relative block p-4 leading-8 top-[var(--heightTopbar)]


dialog[create-profile]
	@apply bg-[var(--colorBackgroundLight)] text-[var(--colorText)] shadow-mdd rounded-md

	>[item]
		@apply inblock w-auto mr-4 h-8 leading-8 mb-2

p-profile
	@apply block border rounded-md mb-4 p-4

	p-info
		@apply block whitespace-nowrap elli
</style>
