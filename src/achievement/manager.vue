<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<template>
	<p-fixed-topbar>
		<!-- <p-tab-button :now="brop($tabNow == 'main')">概览</p-tab-button> -->
		<p-tab-button
			v-for="{ achievementsTabbedFiltered, achievementsTabbed, tab, textTab } of infosAchievementTabbed"
			:key="tab"
			:now="brop($tabNow == tab)"
			@click="$tabNow = tab, scrollTo(tab)"
		>
			<Icon :icon="faTrophy" style="color:var(--cMain)" /> {{ textTab }} {{ achievementsTabbedFiltered.length }}/{{ achievementsTabbed.length }}
		</p-tab-button>
	</p-fixed-topbar>

	<p-fixed-sidebar>
		<p-split>过滤</p-split>
		<Texter v-model="$word" item place="搜索" />
		<Combo v-model="$optionVersion" item place="版本" :options="optionsVersion" @click.right.exact.stop.prevent="$optionVersion = '-'" />
		<p-split>系列</p-split>
		<p-series>
			<Click v-for="series of M.seriesAchievement" :key="series.id"
				option-button :text="series.name"
				:white="!$setOptionSeries.has(series.id)"
				@click.left.exact="switchSetOption($setOptionSeries, series.id)"
				@click.right.exact.stop.prevent="switchSetOptionSingle($setOptionSeries, series.id, M.seriesAchievement.map(series => series.id))"
				@click.ctrl="switchSetOptionSingle($setOptionSeries, series.id, M.seriesAchievement.map(series => series.id))"
				@click.shift="switchSetOptionAll($setOptionSeries, M.seriesAchievement.map(series => series.id))"
			/>
		</p-series>

		<!-- <Combo v-model="$optionVersion" item class="!w-36" lightcone4 label="活动" align="center" align-options="left" :options="optionsVersion" /> -->
		<!-- <Combo v-model="$optionVersion" item class="!w-36" lightcone4 label="稀有" align="center" align-options="left" :options="optionsVersion" /> -->
		<!-- <Combo v-model="$optionVersion" item class="!w-36" lightcone4 label="难度" align="center" align-options="left" :options="optionsVersion" /> -->

		<!-- <p-tag-filter item>
			<Combo v-model="$tagsFilter" class="inblock" style="width: calc(100vw - 10rem);" label="标签"
				:options="[...setTagsAvailable].sort()" key-show="$$" key-value="$$"
				multi-select="array" filter
			/>
		</p-tag-filter> -->
	</p-fixed-sidebar>

	<p-main-box>
		<template v-for="{ achievementsTabbedFiltered, achievementsTabbed, toStatus, tab, textTab } of infosAchievementTabbed" :key="tab">
			<p-box v-if="$tabNow == tab" :anchor="tab">
				<p-title>{{ textTab }} {{ achievementsTabbedFiltered.length }}/{{ achievementsTabbed.length }}</p-title>
				<p-achievements>
					<p-achievement v-for="achievement of achievementsTabbedFiltered" :key="achievement.id">
						<p-oper-box>
							<Click v-if="!$profile?.infosAchievementPlayer$id[achievement.id]?.status" oper-button text="完成" :icon="toStatus ? faCheck : faRotateLeft" @dblclick="modifyPlayerAchievementStatus(achievement.id, toStatus)" />
							<Click v-if="$profile?.infosAchievementPlayer$id[achievement.id]?.status >= 1" oper-button white text="撤回" :icon="toStatus ? faCheck : faRotateLeft" @dblclick="modifyPlayerAchievementStatus(achievement.id, toStatus)" />
							<Click v-if="!$profile?.infosAchievementPlayer$id[achievement.id]?.status && !$profile?.infosAchievementPlayer$id[achievement.id]?.shelved" oper-button white text="搁置" :icon="faEyeSlash" @dblclick="modifyPlayerAchievementShelved(achievement.id, true)" />
							<Click v-if="!$profile?.infosAchievementPlayer$id[achievement.id]?.status && $profile?.infosAchievementPlayer$id[achievement.id]?.shelved" oper-button white text="恢复" :icon="faEye" @dblclick="modifyPlayerAchievementShelved(achievement.id, false)" />
						</p-oper-box>

						<p-title :title="achievement.id">● {{ renderAchievementText(achievement.title, achievement.paramsText) }}</p-title>
						<p-desc v-html="renderAchievementText(achievement.desc, achievement.paramsText)" />
						<p-tags>
							<p-tag v-for="tag of [`系列:${M.seriesAchievement.find(s => s.id == achievement.series)?.name ?? achievement.series}`, ...achievement.tags]" :key="tag">{{ tag }}</p-tag>
						</p-tags>
						<p-exclusives v-if="achievement.idsAchievementExclusive?.length">
							<p-exclusive v-for="id of achievement.idsAchievementExclusive" :key="id"
								v-html="`【互斥成就】<span class='font-bold mr-1'>${M.achievements.find(achievement => achievement.id == id).title}</span> ${renderAchievementText(
									M.achievements.find(achievement => achievement.id == id).desc,
									M.achievements.find(achievement => achievement.id == id).paramsText
								).replaceAll('<br>', `<span class='mr-4'></span>`)}`"
							/>
						</p-exclusives>
					</p-achievement>
				</p-achievements>
			</p-box>
		</template>
	</p-main-box>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';

import { FontAwesomeIcon as Icon } from '@fortawesome/vue-fontawesome';
import { faCheck, faRotateLeft, faEye, faEyeSlash, faTrophy } from '@fortawesome/free-solid-svg-icons';

import { tabAdmin } from '@nuogz/vue-sidebar';
import { Click, Combo, Texter } from '@nuogz/vue-components';
import { $fail } from '@nuogz/vue-alert';

import Day from '../lib/day.pure.js';

import M from '../lib/meta.js';
import { PA, PlayerAchievementInfo } from '../profile/admin.js';



const $tab = ref(null);
onMounted(() => tabAdmin.emitChanged('mounted'));
tabAdmin.addTabHandle('achievement-manager', $tab, tab => tab.params[0] ? query(tab.params[0]) : void 0, tabAdmin.sUseHandleInit);



/** @type {import('vue').Ref<import('../profile/admin.js').Profile>} */
const $profile = ref(null);


const $word = ref('');

const optionsVersion = [
	{ value: '-', text: '版本 => 全部' },
	...M.versions.map(version => ({ value: version, text: `版本 => ${version}` }))
];
const $optionVersion = ref('-');


const switchSetOption = (set, value) => set.has(value) ? set.delete(value) : set.add(value);
const switchSetOptionSingle = (set, value, values) => set.has(value) && set.size == 1 ? (values.forEach(v => set.add(v)), set.delete(value)) : (set.clear(), set.add(value));
const switchSetOptionAll = (set, values) => set.size ? set.clear() : values.forEach(value => set.add(value));
// const optionsActivity = [
// 	{ value: 'all', text: '全部' },
// 	...M.versions.map(version => ({ value: version, text: version }))
// ];
// const $optionActivity = ref('all');



const query = async idProfile => {
	if($tab.value) { $tab.value.tipsTitle = `档案ID: ${idProfile}`; }

	try {
		const profile = PA.$profiles.value.find(profile => profile.id == idProfile);
		if(!profile) { throw Error('找不到对应档案'); }

		$profile.value = profile;

		if($tab.value) { $tab.value.tipsTitle = `UID: ${profile.uid}`; }

		localStorage.setItem('last-profile-id', profile.id);
	}
	catch(error) {
		$fail('获取成就记录', error);
	}
};



const $setOptionSeries = ref(new Set(M.seriesAchievement.map(series => series.id)));

const sorts$seriesAchievement = M.seriesAchievement.reduce((acc, series, index) => (acc[series.id] = M.seriesAchievement.length - index, acc), {});


const achievementsFinished = computed(() => M.achievements.filter(achievement => {
	return !$profile.value?.infosAchievementPlayer$id[achievement.id]?.shelved
		&& $profile.value?.infosAchievementPlayer$id[achievement.id]?.status == 1;
}));
const achievementsOngoing = computed(() => M.achievements.filter(achievement => {
	return !$profile.value?.infosAchievementPlayer$id[achievement.id]?.shelved
		&& $profile.value?.infosAchievementPlayer$id[achievement.id]?.status != 1
		&& $profile.value?.infosAchievementPlayer$id[achievement.id]?.status != 2;
}));
const achievementsShelved = computed(() => M.achievements.filter(achievement => {
	return $profile.value?.infosAchievementPlayer$id[achievement.id]?.shelved;
}));


/**
 * @param {typeof M.achievements[0]} achievement
 */
const filterAchievement = achievement => {
	return (achievement.title.includes($word.value) || achievement.desc.includes($word.value))
		&& $setOptionSeries.value.has(achievement.series)
		&& $tagsFilter.value.filter(tagFilter => achievement.tags.includes(tagFilter)).length == $tagsFilter.value.length
		&& ($optionVersion.value == '-' || achievement.tags.includes(`版本:${$optionVersion.value}`));
};

const achievementsFilteredFinished = computed(() => achievementsFinished.value.filter(filterAchievement)
	.sort((a, b) => sorts$seriesAchievement[b.series] - sorts$seriesAchievement[a.series] || b.priority - a.priority));
const achievementsFilteredOngoing = computed(() => achievementsOngoing.value.filter(filterAchievement)
	.sort((a, b) => sorts$seriesAchievement[b.series] - sorts$seriesAchievement[a.series] || b.priority - a.priority));
const achievementsFilteredShelved = computed(() => achievementsShelved.value.filter(filterAchievement)
	.sort((a, b) => sorts$seriesAchievement[b.series] - sorts$seriesAchievement[a.series] || b.priority - a.priority));



const $tabNow = ref('ongoing');
const infosAchievementTabbed = computed(() => [
	{ tab: 'ongoing', textTab: '未完成', achievementsTabbedFiltered: achievementsFilteredOngoing.value, achievementsTabbed: achievementsOngoing.value, toStatus: 1 },
	{ tab: 'finished', textTab: '已完成', achievementsTabbedFiltered: achievementsFilteredFinished.value, achievementsTabbed: achievementsFinished.value, toStatus: 0 },
	{ tab: 'shelve', textTab: '已搁置', achievementsTabbedFiltered: achievementsFilteredShelved.value, achievementsTabbed: achievementsShelved.value, toStatus: 1 },
]);



/**
 * @param {string} textRaw
 * @param {object} params
 */
const renderAchievementText = (textRaw, params = []) => {
	let text = textRaw
		.replace(/<\/?unbreak>/g, '')
		.replace(/<\/?u>/g, '')
		.replace(/\\n/g, '<br>')
		.replace('{TEXTJOIN#54}', `<span style="color:var(--cMain);">${$profile.value?.name ?? '开拓者'}的扑满以太灵</span>`)
		.replace('{TEXTJOIN#87}', `<span style="color:var(--cMain);">${$profile.value?.name ?? '开拓者'}的游艇</span>`)
		.replace('{NICKNAME}', `<span style="color:var(--cMain);">${$profile.value?.name ?? '开拓者'}</span>`);

	if(params.length) {
		text = text.replace(/(?<!=)#(\d+)(?:\[([im])\](%?))?/g, (match, index, format, percent) => {
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
			else if(format) {
				throw `unknown format[${format}]`;
			}


			return `<color=#F79646FF>${textNumber}</color>`;
		});
	}

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


const modifyPlayerAchievementStatus = (idAchievement, toStatus) => {
	const profile = $profile.value;
	const achievement = M.achievements.find(achievement => achievement.id == idAchievement);

	const status = toStatus;
	const timeFinished = toStatus ? Day().unix() : undefined;


	let infoAchievementPlayer = profile.infosAchievementPlayer$id[idAchievement];
	if(!infoAchievementPlayer) {
		profile.infosAchievementPlayer$id[idAchievement] = new PlayerAchievementInfo();
		infoAchievementPlayer = profile.infosAchievementPlayer$id[idAchievement];

		infoAchievementPlayer.id = achievement.id;
	}

	infoAchievementPlayer.status = status;
	infoAchievementPlayer.timeFinished = timeFinished;

	if(status == 0 && !infoAchievementPlayer.shelved) {
		delete profile.infosAchievementPlayer$id[idAchievement];
	}
	else if(status == 1 && infoAchievementPlayer.shelved) {
		infoAchievementPlayer.shelved = undefined;
		infoAchievementPlayer.timeShelved = undefined;
	}


	for(const idAchievementExclusive of achievement?.idsAchievementExclusive ?? []) {
		let infoAchievementPlayerExclusive = profile.infosAchievementPlayer$id[idAchievementExclusive];
		if(!infoAchievementPlayerExclusive) {
			profile.infosAchievementPlayer$id[idAchievementExclusive] = new PlayerAchievementInfo();
			infoAchievementPlayerExclusive = profile.infosAchievementPlayer$id[idAchievementExclusive];

			infoAchievementPlayerExclusive.id = achievement.id;
		}

		infoAchievementPlayerExclusive.status = status == 1 ? 2 : 0;
		infoAchievementPlayerExclusive.timeFinished = timeFinished;

		if(status == 0 && !infoAchievementPlayerExclusive.shelved) {
			delete profile.infosAchievementPlayer$id[idAchievementExclusive];
		}
		else if(status == 1 && infoAchievementPlayer.shelved) {
			infoAchievementPlayer.shelved = undefined;
			infoAchievementPlayer.timeShelved = undefined;
		}
	}


	PA.save();
};

const modifyPlayerAchievementShelved = (idAchievement, toShelved) => {
	const profile = $profile.value;
	const achievement = M.achievements.find(achievement => achievement.id == idAchievement);

	const shelved = toShelved ? true : undefined;
	const timeShelved = toShelved ? Day().unix() : undefined;


	let infoAchievementPlayer = profile.infosAchievementPlayer$id[idAchievement];
	if(!infoAchievementPlayer) {
		profile.infosAchievementPlayer$id[idAchievement] = new PlayerAchievementInfo();
		infoAchievementPlayer = profile.infosAchievementPlayer$id[idAchievement];

		infoAchievementPlayer.id = achievement.id;
	}

	infoAchievementPlayer.shelved = shelved;
	infoAchievementPlayer.timeShelved = timeShelved;


	for(const idAchievementExclusive of achievement?.idsAchievementExclusive ?? []) {
		let infoAchievementPlayerExclusive = profile.infosAchievementPlayer$id[idAchievementExclusive];
		if(!infoAchievementPlayerExclusive) {
			profile.infosAchievementPlayer$id[idAchievementExclusive] = new PlayerAchievementInfo();
			infoAchievementPlayerExclusive = profile.infosAchievementPlayer$id[idAchievementExclusive];

			infoAchievementPlayerExclusive.id = achievement.id;
		}

		infoAchievementPlayerExclusive.shelved = shelved;
		infoAchievementPlayerExclusive.timeShelved = timeShelved;
	}


	PA.save();
};



const scrollTo = type => {
	document.querySelector(`[anchor=${type}]`)
		?.scrollIntoView({ behavior: 'auto', block: 'start' });

	const html = document.documentElement;
	if(html.scrollHeight - (html.scrollTop + html.clientHeight) > 1) {
		html.scrollTop -= 36;
	}
};



const $tagsFilter = ref([]);
// const setTagsAvailable = new Set(M.achievements.flatMap(achievement => achievement.tags));


// const $idsAchievementShelved = ref([]);
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
	p-tag-filter
		p-label
			@apply inblock
		>[option-button]
			@apply inblock mx-1 px-4
			@apply border-2 border-[var(--cGray)] h-8 lead-b1-8

p-main-box
	@apply relative p-4 leading-8 top-8
	@apply grid grid-cols-1 gap-4

	p-box
		>p-title
			@apply block h-8 leading-8 mb-2
		p-achievements
			@apply relative overflow-x-hidden w-[1080px]
			@apply grid grid-cols-1 auto-rows-min gap-0
			@apply border-2 border-[var(--cGray)]

			p-achievement
				@apply p-2 rounded-none shadow-sm bg-[var(--cBack)]
				&:hover
					@apply shadow-mdd brightness-95 dark:brightness-125
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

				p-oper-box
					@apply float-right top-0 block

					[oper-button]
						@apply block border border-[var(--cMain)]
						@apply mb-1 h-8 lead-b1-8

</style>
