<template>
	<p-fixed-topbar>
		<p-tab-button @click="scrollTo('gacha-summary')"><Icon :icon="faStarOfDavid" style="color:var(--cMain)" /> 总览</p-tab-button>
		<p-tab-button @click="scrollTo('gacha-type')"><Icon :icon="faStarOfDavid" style="color:var(--cMain)" /> 按跃迁类型概览</p-tab-button>
		<p-tab-button @click="scrollTo('gacha-type-detail')"><Icon :icon="faStarOfDavid" style="color:var(--cMain)" /> 按跃迁类型</p-tab-button>
		<p-tab-button @click="scrollTo('gacha-pool-detail')"><Icon :icon="faStarOfDavid" style="color:var(--cMain)" /> 按跃迁活动</p-tab-button>
	</p-fixed-topbar>

	<p-fixed-sidebar>
		<p-split>四星跃迁</p-split>
		<p-options>
			<Click v-for="option of optionsShowRarity4" :key="option.value" option-button
				:text="option.text" :white="brop($optionShowRarity4 != option.value)" @click="$optionShowRarity4 = option.value" />
		</p-options>
		<p-split>跃迁详细</p-split>
		<p-options>
			<Click v-for="option of optionsShownHidden" :key="option.value" option-button
				:text="option.text" :white="brop($optionShowDetail != option.value)" @click="$optionShowDetail = option.value" />
		</p-options>
		<p-split>子跃迁活动</p-split>
		<p-options>
			<Click v-for="option of optionsShownHidden" :key="option.value" option-button
				:text="option.text" :white="brop($optionShowMatePool != option.value)" @click="$optionShowMatePool = option.value" />
		</p-options>
		<p-split>群星跃迁</p-split>
		<p-options>
			<Click v-for="option of optionsShownHidden" :key="option.value" option-button
				:text="option.text" :white="brop($optionShowPermanentPool != option.value)" @click="$optionShowPermanentPool = option.value" />
		</p-options>
		<p-split>新手跃迁</p-split>
		<p-options>
			<Click v-for="option of optionsShownHidden" :key="option.value" option-button
				:text="option.text" :white="brop($optionShowNewbiePool != option.value)" @click="$optionShowNewbiePool = option.value" />
		</p-options>
	</p-fixed-sidebar>

	<p-main-box v-if="$profile">
		<p-box gacha-summary>
			<p-gather-info>
				● <span value-highlight>{{ $profile.logsParsed.length }}</span> 次抽卡，
				平均 <span value-highlight>{{
					(($profile.logsParsed.length - Object.values(A.analysisesTypeGacha).map(p => p.countInvestNext).reduce((acc, cur) => acc + cur, 0)) / (A.countCharacter5 + A.countLightcone5)).toFixed(2)
				}}</span> 抽出金
			</p-gather-info>
			<p-gather-info>
				● <span value-highlight>{{ A.countCharacter5 }}</span> 五星角色，
				<span value-highlight>{{ A.countCharacter4 }}</span> 四星角色
			</p-gather-info>
			<p-gather-info>
				● <span value-highlight>{{ A.countLightcone5 }}</span> 五星光锥，
				<span value-highlight>{{ A.countLightcone4 }}</span> 四星光锥
			</p-gather-info>
		</p-box>

		<p-box gacha-type>
			<p-title>● 按<span value-highlight-xl>跃迁类型</span>概览</p-title>
			<p-gathers :class="classesGirdColunm[analysisesTypeGachaShown.length]">
				<p-gather v-for="analysis of analysisesTypeGachaShown" :key="analysis.id">
					<p-title>{{ analysis.name }}</p-title>
					<p-info><span value-highlight>{{ analysis.logs.length }}</span> 跃迁</p-info>
					<p-info><span value-highlight>{{ String(analysis.logs5.length).padStart(2, '&nbsp;') }}</span> 五星</p-info>
					<p-info><span value-highlight>{{ String(analysis.logs4.length).padStart(2, '&nbsp;') }}</span> 四星</p-info>
				</p-gather>
			</p-gathers>
		</p-box>

		<p-box gacha-type-detail>
			<p-title>● 按<span value-highlight-xl>跃迁类型</span></p-title>
			<p-gathers :class="classesGirdColunm[analysisesTypeGachaShown.length > 2 ? 3 : analysisesTypeGachaShown.length]">
				<p-gather v-for="analysis of analysisesTypeGachaShown" :id="`type-detail-${analysis.id}`" :key="analysis.id"
					:class="isPoolGachaMain(analysis.id) ? classesRowSpan[analysisesTypeGachaBaseShown.length] : null"
				>
					<PoolTitle :analysis="analysis" :shown-character-rarity4="$shownCharacterRarity4" :shown-lightcone-rarity4="$shownLightconeRarity4" :misseds$id="A.misseds$id" />

					<p-gachas v-if="$optionShowDetail">
						<GachaItem v-if="analysis.countInvestNext" type="count-invest-next" :type-gacha="analysis.id" :count-invest="analysis.countInvestNext" />
						<GachaItem v-for="log of analysis.logsRare" :key="log.id" :a="A" :log="log" />
					</p-gachas>
				</p-gather>
			</p-gathers>
		</p-box>

		<p-box gacha-pool-detail>
			<p-title>● 按<span value-highlight-xl>跃迁活动</span></p-title>
			<p-gathers>
				<p-gather v-for="analysis of analysisesPoolGachaShown" :key="analysis.id" :main="brop(isPoolGachaMain(analysis.pool.type))">
					<PoolTitle :analysis="analysis" :shown-character-rarity4="$shownCharacterRarity4" :shown-lightcone-rarity4="$shownLightconeRarity4" :misseds$id="A.misseds$id" />

					<template v-if="$optionShowMatePool && analysis.poolsSub.length > 1">
						<PoolTitle v-for="analysisSub of analysis.poolsSub" :key="analysisSub.id"
							display="sub"
							:analysis="analysisSub"
							:shown-character-rarity4="$shownCharacterRarity4"
							:shown-lightcone-rarity4="$shownLightconeRarity4"
							:misseds$id="A.misseds$id"
						/>
					</template>

					<p-gachas v-if="$optionShowDetail">
						<GachaItem v-if="analysis.countInvestNext" type="count-invest-next" :type-gacha="analysis.pool.type" :count-invest="analysis.countInvestNext" />
						<GachaItem v-for="log of analysis.logsRare" :key="log.id" :log="log" :a="A" />
						<GachaItem v-if="analysis.countInvestPrev" type="count-invest-prev" :type-gacha="analysis.pool.type" :count-invest="analysis.countInvestPrev" />
					</p-gachas>
				</p-gather>
			</p-gathers>
		</p-box>
	</p-main-box>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';

import { FontAwesomeIcon as Icon } from '@fortawesome/vue-fontawesome';
import { faStarOfDavid } from '@fortawesome/free-solid-svg-icons';

import { tabAdmin } from '@nuogz/vue-sidebar';
import { Click } from '@nuogz/vue-components';
import { $fail } from '@nuogz/vue-alert';

import { PA } from '../profile/admin.js';

import analyseGacha from './analyseGacha.js';

import GachaItem from './comp/GachaItem.vue';
import PoolTitle from './comp/PoolTitle.vue';



const $tab = ref(null);
onMounted(() => tabAdmin.emitChanged('mounted'));
tabAdmin.addTabHandle('gacha-analysis', $tab, tab => tab.params[0] ? query(tab.params[0]) : void 0, tabAdmin.sUseHandleInit);



/** @type {import('vue').Ref<import('../profile/admin.js').Profile>} */
const $profile = ref(null);


const $optionShowRarity4 = ref('none');
const optionsShowRarity4 = [
	{ value: '-', text: '全部' },
	{ value: 'character', text: '角色' },
	{ value: 'lightcone', text: '光锥' },
	{ value: 'none', text: '隐藏' },
];
const $shownCharacterRarity4 = computed(() => $optionShowRarity4.value == '-' || $optionShowRarity4.value == 'character');
const $shownLightconeRarity4 = computed(() => $optionShowRarity4.value == '-' || $optionShowRarity4.value == 'lightcone');


const $optionShowDetail = ref(true);
const $optionShowMatePool = ref(true);


const classesGirdColunm = [null, `grid-cols-1`, `grid-cols-2`, `grid-cols-3`, `grid-cols-4`, `grid-cols-5`];
const classesRowSpan = [null, null, `row-span-2`, `row-span-3`];

const $optionShowNewbiePool = ref(true);
const $optionShowPermanentPool = ref(true);
const optionsShownHidden = [
	{ value: true, text: '显示' },
	{ value: false, text: '隐藏' },
];


const filterPools$options = (array, key) => array.filter(pool => ($optionShowNewbiePool.value || pool[key] != 2) && ($optionShowPermanentPool.value || pool[key] != 1));
const isPoolGachaMain = id => !['0', '1', '2'].includes(id);


const A = computed(() => analyseGacha($profile.value?.logsParsed ?? [], $shownCharacterRarity4.value, $shownLightconeRarity4.value));

/** @type {import('vue').ComputedRef<import('./analyseGacha.js').GachaTypeAnalysis[]>} */
const analysisesTypeGachaShown = computed(() => filterPools$options(A.value.analysisesTypeGacha, 'id'));
const analysisesTypeGachaBaseShown = computed(() => analysisesTypeGachaShown.value.filter(a => !isPoolGachaMain(a.id)));

/** @type {import('vue').ComputedRef<import('./analyseGacha.js').GachaPoolAnalysis[]>} */
const analysisesPoolGachaShown = computed(() => filterPools$options(A.value.pools, 'typePool'));



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
		$fail('获取抽卡记录', error);
	}
};


const scrollTo = type => {
	document.querySelector(`p-box[${type}]`)?.scrollIntoView({ behavior: 'auto', block: 'start' });

	const html = document.documentElement;
	if(html.scrollHeight - (html.scrollTop + html.clientHeight) > 1) {
		html.scrollTop -= 8;
	}
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
	@apply grid grid-cols-1 gap-4

	[value-highlight]
		@apply font-bold text-2xl text-[var(--cMain)] align-super
	[value-highlight-xl]
		@apply font-bold text-xl text-[var(--cMain)]

	p-box[gacha-summary]
		p-gather-info
			@apply block

	p-box[gacha-type]
		p-title
			@apply block mb-1
		p-gathers
			@apply grid gap-[2px] border-2 border-[var(--cGray)] bg-[var(--cGray)] w-[1080px]
			p-gather
				@apply inblock p-4 min-w-[10rem] bg-[var(--cBack)] overflow-hidden
				p-title
					@apply text-lg font-bold mb-2
				p-info
					@apply block mb-0 mt-2 text-right

	p-box[gacha-type-detail]
		p-title
			@apply block mb-1
		p-gathers
			@apply w-[1080px] grid gap-[2px] border-2 border-[var(--cGray)] bg-[var(--cGray)]
			p-gather
				@apply bg-[var(--cBack)] overflow-hidden
				&[main2]
					@apply row-span-2
				&[main3]
					@apply row-span-3
				p-gachas
					@apply block p-4
					:deep(p-gacha-item)
						@apply mb-1

	p-box[gacha-pool-detail]
		p-title
			@apply block mb-1
		p-gathers
			@apply w-[1080px] grid grid-cols-2 gap-[2px] border-2 border-[var(--cGray)] bg-[var(--cGray)]
			p-gather
				@apply bg-[var(--cBack)] overflow-hidden
				&:not([main])
					@apply col-span-2
				p-gachas
					@apply block p-4
					:deep(p-gacha-item)
						@apply mb-1
</style>
