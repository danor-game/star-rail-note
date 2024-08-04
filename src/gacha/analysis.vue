<template>
	<p-fixed-sidebar>
		<Combo v-model="$idProfile" item align="center" align-options="center" :options="$optionsProfiles" @update:model-value="query" />
		<p-split>过滤</p-split>
		<Combo v-model="$optionShowRarity4" item place="四星" :options="optionsShowRarity4" @click.right.exact.stop.prevent="$optionShowRarity4 = 'none'" />
		<Combo v-model="$optionShowDetail" item place="详细" :options="optionsShowDetail" @click.right.exact.stop.prevent="$optionShowDetail = true" />
		<Combo v-model="$optionShowMatePool" item place="子活动" :options="optionsShowMatePool" @click.right.exact.stop.prevent="$optionShowMatePool = true" />
		<Combo v-model="$optionShowNewbiePool" item place="新手跃迁" :options="optionsShowNewbiePool" @click.right.exact.stop.prevent="$optionShowNewbiePool = true" />
		<p-split>跳转</p-split>
		<p-jump @click="scrollTo('gacha-summary')"><Icon :icon="faParagraph" /> 总览</p-jump>
		<p-jump @click="scrollTo('gacha-type')"><Icon :icon="faParagraph" /> 按跃迁类型概览</p-jump>
		<p-jump @click="scrollTo('gacha-type-detail')"><Icon :icon="faParagraph" /> 按跃迁类型</p-jump>
		<p-jump @click="scrollTo('gacha-pool-detail')"><Icon :icon="faParagraph" /> 按跃迁活动</p-jump>
	</p-fixed-sidebar>

	<p-main-box v-if="$profile">
		<p-box gacha-summary>
			<p-gather-info>
				● <span value-highlight>{{ $profile.logsParsed.length }}</span> 次抽卡，
				平均 <span value-highlight>{{
					(($profile.logsParsed.length - Object.values(A.typesPoolGacha).map(p => p.countInvestNext).reduce((acc, cur) => acc + cur, 0)) / (A.countCharacter5 + A.countLightcone5)).toFixed(2)
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
			<p-gathers
				:col4="brop(!~A.typesPoolGacha.findIndex(a => a.id == 0))"
				:col5="brop(~A.typesPoolGacha.findIndex(a => a.id == 0))"
			>
				<p-gather v-for="analysis of A.typesPoolGacha.filter(a => $optionShowNewbiePool ? true : a.id != 2)" :key="analysis.id">
					<p-title>{{ analysis.name }}</p-title>
					<p-info><span value-highlight>{{ analysis.logs.length }}</span> 跃迁</p-info>
					<p-info><span value-highlight>{{ String(analysis.logs5.length).padStart(2, '&nbsp;') }}</span> 五星</p-info>
					<p-info><span value-highlight>{{ String(analysis.logs4.length).padStart(2, '&nbsp;') }}</span> 四星</p-info>
				</p-gather>
			</p-gathers>
		</p-box>

		<p-box gacha-type-detail>
			<p-title>● 按<span value-highlight-xl>跃迁类型</span></p-title>
			<p-gathers>
				<p-gather v-for="analysis of A.typesPoolGacha.filter(a => $optionShowNewbiePool ? true : a.id != 2)" :id="`type-detail-${analysis.id}`" :key="analysis.id"
					:main2="brop($optionShowNewbiePool && analysis.id > 10)"
					:main3="brop($optionShowNewbiePool && analysis.id > 10 && ~A.typesPoolGacha.findIndex(a => a.id == 0))"
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
				<p-gather v-for="analysis of A.pools.filter(a => $optionShowNewbiePool ? true : a.pool.type != 2)" :id="`pool-detail-${analysis.id}`" :key="analysis.id"
					:main="brop(analysis.pool.type > 10)"
				>
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
import { faParagraph } from '@fortawesome/free-solid-svg-icons';

import { tabAdmin } from '@nuogz/vue-sidebar';
import { Combo } from '@nuogz/vue-components';
import { $fail } from '@nuogz/vue-alert';

import { PA } from '../profile/admin.js';

import analyseGacha from './analyseGacha.js';

import GachaItem from './comp/gacha-item.vue';
import PoolTitle from './comp/pool-title.vue';




const $tab = ref(null);
onMounted(() => tabAdmin.emitChanged('mounted'));
tabAdmin.addTabHandle('gacha-analysis', $tab, tab => tab.params[0] ? query($idProfile.value = tab.params[0]) : void 0, tabAdmin.sUseHandleInit);



const $idProfile = ref('');
/** @type {import('vue').Ref<import('../profile/admin.js').Profile>} */
const $profile = ref(null);
const $optionsProfiles = computed(() => PA.$profiles.value.map(profile => ({ value: profile.id, text: profile.nick })));



const $optionShowRarity4 = ref('none');
const $shownCharacterRarity4 = computed(() => $optionShowRarity4.value == '-' || $optionShowRarity4.value == 'character');
const $shownLightconeRarity4 = computed(() => $optionShowRarity4.value == '-' || $optionShowRarity4.value == 'lightcone');
const optionsShowRarity4 = [
	{ value: '-', text: '四星 => 全部' },
	{ value: 'character', text: '四星 => 角色' },
	{ value: 'lightcone', text: '四星 => 光锥' },
	{ value: 'none', text: '四星 => 隐藏' },
];


const $optionShowDetail = ref(true);
const $optionShowMatePool = ref(true);
const $optionShowNewbiePool = ref(true);
const optionsShownHidden = [
	{ value: true, text: '显示' },
	{ value: false, text: '隐藏' },
];
const optionsShowDetail = optionsShownHidden.map(({value,text})=> ({value,text:`详细 => ${text}`}));
const optionsShowMatePool = optionsShownHidden.map(({value,text})=> ({value,text:`子活动 => ${text}`}));
const optionsShowNewbiePool = optionsShownHidden.map(({value,text})=> ({value,text:`新手跃迁 => ${text}`}));

const query = async () => {
	const idProfile = $idProfile.value;


	try {
		const profile = PA.$profiles.value.find(profile => profile.id == idProfile);
		if(!profile) { throw Error('找不到对应档案'); }

		$profile.value = profile;

		if($tab.value) { $tab.value.tipsTitle = `${$tab.value.title} ${profile.uid}`; }

		localStorage.setItem('last-profile-id', profile.id);
	}
	catch(error) {
		$fail('获取抽卡记录', error);
	}
};



const A = computed(() => analyseGacha($profile.value?.logsParsed ?? [], $shownCharacterRarity4.value, $shownLightconeRarity4.value));



const scrollTo = type => {
	document.querySelector(`p-box[${type}]`)?.scrollIntoView({ behavior: 'auto', block: 'start' });

	const html = document.documentElement;
	if(html.scrollHeight - (html.scrollTop + html.clientHeight) > 1) {
		html.scrollTop -= 8;
	}
};
</script>


<style lang="sass" scoped>
p-fixed-sidebar
	@apply block p-4 leading-8 fixed right-0 w-56 h-full z-50 shadow-sm shadow-[var(--cGray,GrayText)] bg-[var(--cBackSideBar)] whitespace-nowrap

	>[item]
		@apply block w-full mr-4 h-8 leading-8 mb-2 text-sm

	p-split
		@apply block w-full my-2 text-base text-[var(--cMain)]
		@apply relative left-[calc(var(--spc)*-2)]
	p-jump
		@apply block w-full my-2 text-sm cursor-pointer select-none
		&:hover
			@apply text-[var(--cMain)] text-base

p-main-box
	@apply grid grid-cols-2 gap-2
	@apply relative mx-auto p-4 w-full leading-8

	[value-highlight]
		@apply font-bold text-2xl text-[var(--cMain)] align-super
	[value-highlight-xl]
		@apply font-bold text-xl text-[var(--cMain)]

	p-box[gacha-summary]
		@apply col-span-full
		p-gather-info
			@apply block

	p-box[gacha-type]
		@apply col-span-2
		p-title
			@apply block mb-2
		p-gathers
			@apply grid gap-[2px] border-2 border-[var(--cGray)] bg-[var(--cGray)] w-[1080px]
			&[col4]
				@apply grid-cols-4
			&[col5]
				@apply grid-cols-5
			p-gather
				@apply inblock p-4 min-w-[10rem] bg-[var(--cBack)] overflow-hidden
				p-title
					@apply text-lg font-bold mb-2
				p-info
					@apply block mb-0 mt-2 text-right

	p-box[gacha-type-detail]
		@apply grid grid-cols-1 gap-2 col-span-2
		p-gathers
			@apply grid grid-cols-3 gap-[2px] border-2 border-[var(--cGray)] bg-[var(--cGray)] w-[1080px]
			grid-template-rows: 1fr auto
			p-gather
				@apply bg-[var(--cBack)] overflow-hidden
				&[main2]
					@apply row-span-2
				&[main3]
					@apply row-span-3
				p-pool-title
					@apply mb-1
				p-gachas
					@apply block p-4
					:deep(p-gacha-item)
						@apply mb-1

	p-box[gacha-pool-detail]
		@apply grid grid-cols-1 gap-[2px] col-span-2 w-[1080px]
		p-gathers
			@apply grid grid-cols-2 gap-[2px] border-2 border-[var(--cGray)] bg-[var(--cGray)]
			p-gather
				@apply bg-[var(--cBack)] overflow-hidden
				&:not([main])
					@apply col-span-2
				p-gachas
					@apply block p-4
					:deep(p-gacha-item)
						@apply mb-1
</style>
