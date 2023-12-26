<!-- eslint-disable vue/no-v-text-v-html-on-component -->

<template>
	<p-fixed-topbar>
		<p-label item>● {{ $namePlayer }}</p-label>
		<Texter v-model="$uid" item class="!w-48" label="UID" type="number" align="center" label-split="&nbsp;" @keyup.enter.exact="query" />
		<Texter v-model="$word" item class="!w-48" label="搜索" align="center" label-split="&nbsp;" />
		<Combo v-model="$optionVersion" item class="!w-36" lightcone4 label="版本" align="center" align-options="left" label-split="&nbsp;" :options="optionsVersion" />
		<Combo v-model="$optionVersion" item class="!w-36" lightcone4 label="活动" align="center" align-options="left" label-split="&nbsp;" :options="optionsVersion" />
		<Combo v-model="$optionVersion" item class="!w-36" lightcone4 label="稀有" align="center" align-options="left" label-split="&nbsp;" :options="optionsVersion" />
		<Combo v-model="$optionVersion" item class="!w-36" lightcone4 label="难度" align="center" align-options="left" label-split="&nbsp;" :options="optionsVersion" />
		<Click item class="!w-16" :text="$doubledColumnMain ? '双列' : '单列'" @click="$doubledColumnMain = !$doubledColumnMain" />

		<br />

		<p-series item>
			<p-label>系列&nbsp;</p-label>
			<Click v-for="series of M.seriesAchievement" :key="`option-series-${series.id}`"
				option-button :text="series.name"
				:white="!$setOptionSeries.has(series.id)"
				@click.exact="switchSetOption($setOptionSeries, series.id)"
				@click.ctrl="switchSetOptionSingle($setOptionSeries, series.id, M.seriesAchievement.map(series => series.id))"
				@click.shift="switchSetOptionAll($setOptionSeries, M.seriesAchievement.map(series => series.id))"
			/>
		</p-series>
		<br />
		<p-tag-filter item>
			<Combo v-model="$tagsFilter" class="inblock" style="width: calc(100vw - 10rem);" label="标签" label-split="&nbsp;"
				:options="[...setTagsAvailable].sort()" key-show="$$" key-value="$$"
				multi-select="array" filter
			/>
		</p-tag-filter>
	</p-fixed-topbar>

	<p-main-box :doubled="brop($doubledColumnMain)">
		<template v-for="[typeFinish, achievements, toStatus] of infosAchievement" :key="`achievement-finishType-${typeFinish}`">
			<p-box>
				<p-title>{{ typeFinish }} {{ achievements.length }}</p-title>
				<p-achievements>
					<p-achievement v-for="achievement of achievements" :key="`achievement-${achievement.id}`">
						<Click oper-button :text="toStatus ? '完成' : '撤回'" :icon="toStatus ? faCheck : faRotateLeft" @click="modifyInfoPlayerAchievement(achievement.id, toStatus)" />
						<p-title>● {{ renderText(achievement.title, achievement.paramsText) }}</p-title>
						<p-desc v-html="renderText(achievement.desc, achievement.paramsText)" />
						<p-tags>
							<p-tag v-for="tag of achievement.tags" :key="`achievement-${achievement.id}-tag-${tag}`">{{ tag }}</p-tag>
						</p-tags>
						<p-exclusives v-if="achievement.idsAchievementExclusive?.length">
							<p-exclusive v-for="id of achievement.idsAchievementExclusive" :key="`achievement-${achievement.id}-exclusive-${id}`"
								v-html="`【互斥成就】<span class='font-bold'>${M.achievements.find(achievement => achievement.id == id).title}</span> ${renderText(
									M.achievements.find(achievement => achievement.id == id).desc,
									M.achievements.find(achievement => achievement.id == id).paramsText
								).replaceAll('<br>', '')}`"
							/>
						</p-exclusives>
					</p-achievement>
				</p-achievements>
			</p-box>
		</template>
	</p-main-box>
</template>

<script setup>
	import { computed, onMounted, ref, watch } from 'vue';
	import { faCheck, faRotateLeft } from '@fortawesome/free-solid-svg-icons';

	import { tabAdmin } from '@nuogz/vue-sidebar';
	import { Click, Combo, Texter } from '@nuogz/vue-components';
	import { $fail } from '@nuogz/vue-alert';

	import M from '../lib/meta.js';

	import loadProfiles from '../profile/load-profiles.js';
	import saveProfiles from '../profile/save-profiles.js';
	import Day from '../lib/day.pure';



	/**
	 * @typedef {Object} AchievementPlayerInfo
	 * @property {string} id 4010101
	 * @property {number} [status=0] 0, 未完成; 1, 已完成; 2, 已错过
	 * @property {number} timeModify 1703576093
	 */


	const $tab = ref(null);
	tabAdmin.addTabHandle('achievement-manager', $tab);
	onMounted(() => tabAdmin.emitChanged('mounted'));



	const $uid = ref('');
	/** @type {import('vue').Ref<Object<string, AchievementPlayerInfo>>} */
	const $infosPlayerAchievement$id = ref({});
	const $namePlayer = ref('');

	const query = async () => {
		const uid = $uid.value;

		if($tab.value) { $tab.value.tipsTitle = `${$tab.value.title} ${uid}`; }

		try {
			const profile = loadProfiles().find(profile => profile.uid == uid);

			$infosPlayerAchievement$id.value = profile?.infosPlayerAchievement$id || {};
			$namePlayer.value = profile?.name || '';


			localStorage.setItem('last-analysis-uid', uid);
		}
		catch(error) {
			$fail('获取成就记录', error);
		}
	};
	watch($tab, tab => query($uid.value = tab.params?.[0] ?? $uid.value ?? ''));


	const $word = ref('');
	const sorts$seriesAchievement = M.seriesAchievement.reduce((acc, series, index) => (acc[series.id] = M.seriesAchievement.length - index, acc), {});

	const achievementsDone = computed(() => M.achievements.filter(achievement => {
		return true
			&& $infosPlayerAchievement$id.value[achievement.id]?.status == 1
			&& (achievement.title.includes($word.value) || achievement.desc.includes($word.value))
			&& $setOptionSeries.value.has(achievement.series)
			&& $tagsFilter.value.filter(tagFilter => achievement.tags.includes(tagFilter)).length == $tagsFilter.value.length
			&& ($optionVersion.value == 'all' || achievement.tags.includes(`版本:${$optionVersion.value}`));

	}).sort((a, b) => sorts$seriesAchievement[b.series] - sorts$seriesAchievement[a.series] || b.priority - a.priority));
	const achievementsOngoing = computed(() => M.achievements.filter(achievement => {
		return true
			&& ($infosPlayerAchievement$id.value[achievement.id]?.status != 1 && $infosPlayerAchievement$id.value[achievement.id]?.status != 2)
			&& (achievement.title.includes($word.value) || achievement.desc.includes($word.value))
			&& $setOptionSeries.value.has(achievement.series)
			&& $tagsFilter.value.filter(tagFilter => achievement.tags.includes(tagFilter)).length == $tagsFilter.value.length
			&& ($optionVersion.value == 'all' || achievement.tags.includes(`版本:${$optionVersion.value}`));
	}).sort((a, b) => sorts$seriesAchievement[b.series] - sorts$seriesAchievement[a.series] || b.priority - a.priority));


	const infosAchievement = computed(() => [
		['未完成', achievementsOngoing.value, 1],
		['已完成', achievementsDone.value, 0],
	]);


	const optionsVersion = [
		{ value: 'all', text: '全部' },
		...M.versions.map(version => ({ value: version, text: version }))
	];
	const $optionVersion = ref('all');

	const $setOptionSeries = ref(new Set(M.seriesAchievement.map(series => series.id)));
	const switchSetOption = (set, value) => set.has(value) ? set.delete(value) : set.add(value);
	const switchSetOptionSingle = (set, value, values) => set.has(value) ? (values.forEach(value => set.add(value)), set.delete(value)) : (set.clear(), set.add(value));
	const switchSetOptionAll = (set, values) => set.size ? set.clear() : values.forEach(value => set.add(value));
	// const optionsActivity = [
	// 	{ value: 'all', text: '全部' },
	// 	...M.versions.map(version => ({ value: version, text: version }))
	// ];
	// const $optionActivity = ref('all');






	/**
	 * @param {string} textRaw
	 * @param {object} params
	 */
	const renderText = (textRaw, params = []) => {
		let text = textRaw
			.replace(/<\/?unbreak>/g, '')
			.replace(/<\/?u>/g, '')
			.replace(/\\n/g, '<br>')
			.replace('{TEXTJOIN#54}', `<span style="color:var(--cMain);">${$namePlayer.value}的扑满以太灵</span>`)
			.replace('{NICKNAME}', `<span style="color:var(--cMain);">${$namePlayer.value}</span>`)
			.replace(/#(\d+)\[([im])\](%?)/g, (match, index, format, percent) => {
				/** @type {number} */
				let textNumber = params[index - 1];


				if(format == 'i') {
					if(percent == '%') {
						textNumber = `${(textNumber * 100).toFixed(0)}%`;
					}
					else {
						textNumber = textNumber.toFixed(0);
					}
				}
				else if(format == 'm') {
					textNumber = `${(textNumber / 10000).toFixed(1)}万`;
				}
				else {
					throw `unknown format[${format}]`;
				}


				return `<color=#F79646FF> ${textNumber} </color>`;
			});

		const blocks = text
			.split(/(?=<color=#[0-9a-fA-F]{8}>|<\/color>)|(?<=<color=#[0-9a-fA-F]{8}>|<\/color>)/);
		if(blocks.length > 1) {
			const stackRGBA = [];
			const textsRich = [];

			for(const block of blocks) {
				if(block == '</color>') { stackRGBA.shift(); continue; }


				let [, rgba] = block.match(/<color=#([0-9a-fA-F]{8})>/) ?? [];
				if(rgba) { stackRGBA.unshift(rgba); continue; }


				if((rgba = stackRGBA[0])) {
					textsRich.push(`<span style="color:#${rgba};">${block}</span>`);
				}
				else {
					textsRich.push(block);
				}
			}

			text = textsRich.join('');
		}

		return text;
	};


	const modifyInfoPlayerAchievement = (id, toStatus) => {
		const profiles = loadProfiles();
		const profile = profiles.find(profile => profile.uid == $uid.value);

		if(!profile) { return $fail('完成成就', `找不到档案[${$uid.value}]`); }
		if(!profile.infosPlayerAchievement$id) { profile.infosPlayerAchievement$id = {}; }


		profile.infosPlayerAchievement$id[id] = Object.assign(
			profile.infosPlayerAchievement$id[id],
			{ id, status: toStatus, timeModify: Day().unix() },
		);


		const achievement = M.achievements.find(achievement => achievement.id == id);

		for(const idAchievementExclusive of achievement?.idsAchievementExclusive || []) {
			profile.infosPlayerAchievement$id[idAchievementExclusive] = Object.assign(
				profile.infosPlayerAchievement$id[idAchievementExclusive],
				{
					id: idAchievementExclusive,
					status: toStatus == 0 ? 0 : toStatus == 1 ? 2 : 0,
					timeModify: Day().unix(),
				}
			);
		}


		saveProfiles(profiles);

		query();
	};



	const $doubledColumnMain = ref(true);


	const $tagsFilter = ref([]);
	const setTagsAvailable = new Set(M.achievements.flatMap(achievement => achievement.tags));
</script>


<style lang="sass" scoped>
p-fixed-topbar
	@apply block p-2 pb-0 leading-8 fixed h-[calc(var(--spc)*36)] z-50 shadow-mdd bg-[var(--cBack)] whitespace-nowrap
	width: calc( 100% - var(--widthSidebar))
	>[item]
		@apply inblock w-auto mr-4 h-8 leading-8 mb-3
	p-series
		p-label
			@apply inblock
		>[option-button]
			@apply inblock mx-1 px-4
			@apply border-2 border-[var(--cMain)] h-8 lead-b1-8
	p-tag-filter
		p-label
			@apply inblock
		>[option-button]
			@apply inblock mx-1 px-4
			@apply border-2 border-[var(--cMain)] h-8 lead-b1-8

p-main-box
	@apply relative mx-auto p-4 w-full leading-8 top-[calc(var(--spc)*36)]
	@apply grid grid-cols-1 auto-rows-min gap-2

	&[doubled]
		@apply grid-cols-2

		p-box
			>p-achievements
				height: calc(100vh - var(--spc) * (36 + 8 + 8))

	p-box
		>p-title
			@apply block h-8
		p-achievements
			@apply relative overflow-x-hidden overflow-y-scroll
			@apply grid grid-cols-1 auto-rows-min gap-2


			p-achievement
				@apply p-2 mx-1 border rounded-sm shadow-mdd
				p-title
					@apply block text-[var(--cMain)] font-bold w-fit
				p-desc
					@apply block pl-5
				p-tags
					@apply block pl-4 mt-1
					p-tag
						@apply inblock mx-0.5 p-2 py-1 text-xs text-[var(--cTextMain)] bg-[var(--cMain)] rounded-full opacity-80
						@apply select-none cursor-pointer hover:opacity-100
				p-exclusives
					@apply block pl-4 mt-2
					p-exclusive
						@apply block text-xs elli

				[oper-button]
					@apply float-right h-16 leading-[4rem] top-0

</style>
