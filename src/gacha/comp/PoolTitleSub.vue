<template>
	<p-pool-title :shown-rarity-4="brop($itemsBoost4.length)">
		<p-header v-if="$itemsBoost5[0]" @mouseenter="showTips($itemsBoost5[0], $event)">
			<img :src="`./image/item/${$itemsBoost5[0]}.png`" />
		</p-header>

		<p-name-box>
			<p-name>
				<span>{{ props.analysis?.name }}</span>
				<sup v-tip="$pool.rerun ? `第${$pool.rerun}次复刻` : false">{{ $pool.rerun ? $pool.rerun + 1 : '&nbsp;' }}</sup>
				<span>&nbsp;</span>

				<p-boost v-for="idItem of $itemsBoost5" :key="idItem" _rarity-5 @mouseenter="showTips(idItem, $event)">
					{{ M.items$id[idItem]?.name || '未知' }}
				</p-boost>
			</p-name>

			<p-boosts v-if="$itemsBoost4.length">
				<p-boost v-for="idItem of $itemsBoost4" :key="idItem" _rarity-4 @mouseenter="showTips(idItem, $event)">
					{{ M.items$id[idItem]?.name }}
				</p-boost>
			</p-boosts>

			<p-count>
				<span _total>{{ $logs.length }}</span>
				<span _split> 抽 </span>
				<span _rarity-5>{{ $logs5.length }}</span>
				<sup _missed>{{ $logs5.filter(log => log.id in misseds$id).length }}</sup>
				<span _split> 五星 </span>
				<template v-if="$shownRarity4Typed">
					<span _rarity-4>{{ $logs4.length }}</span>
					<span _split> 四星</span>
				</template>
			</p-count>
		</p-name-box>

		<p-tips ref="$domTips">
			<template v-if="$itemTips">
				<img splash :src="`./image/item/${$itemTips.id}.png`" />
				<p-info title> {{ $itemTips.name }}</p-info>
				<p-info v-if="$itemTips.element" sub>○ 属性：{{ M.elements$id[$itemTips.element]?.name }}</p-info>
				<p-info sub>○ 命途：{{ M.paths$id[$itemTips.path]?.name }}</p-info>
			</template>
		</p-tips>
	</p-pool-title>
</template>

<script setup>
import { computed, ref } from 'vue';

import Tippy from 'tippy.js';

import M from '../../lib/meta.js';



const props = defineProps({
	/**
	 * 抽卡分析
	 * @type {import('../analyseGacha.js').GachaPoolAnalysis}
	 */
	analysis: { type: Object, default: null },
	/**
	 * 主抽卡分析
	 * @type {import('../analyseGacha.js').GachaPoolAnalysis}
	 */
	analysisLead: { type: Object, default: null },

	/** 显示四星角色 */
	shownCharacterRarity4: { type: Boolean, default: false },
	/** 显示四星光锥 */
	shownLightconeRarity4: { type: Boolean, default: false },

	/** 歪五星记录 */
	misseds$id: { type: Object, default: () => { } },
});



const $pool = computed(() => props.analysis?.pool ?? {});
const $poolLead = computed(() => props.analysisLead?.pool ?? {});

const $isCharacterPool = computed(() => $pool.value.typeItem == 'character');
const $isLightconePool = computed(() => $pool.value.typeItem == 'lightcone');

const $shownRarity4Typed = computed(() => (props.shownCharacterRarity4 && $isCharacterPool.value) || (props.shownLightconeRarity4 && $isLightconePool.value));

const $hasSameRarity4 = computed(() => ($pool.value.itemsBoost4 ?? []).toSorted().join('|') == ($poolLead.value.itemsBoost4 ?? []).toSorted().join('|'));

const $itemsBoost5 = computed(() => $pool.value.itemsBoost5 ?? []);
const $itemsBoost4 = computed(() => $shownRarity4Typed.value && !$hasSameRarity4.value ? $pool.value.itemsBoost4 ?? [] : []);
const $logs = computed(() => $pool.value.logs ?? []);
const $logs5 = computed(() => $pool.value.logs5 ?? []);
const $logs4 = computed(() => $shownRarity4Typed.value ? $pool.value.logs4 ?? [] : []);



const $itemTips = ref(null);
const $domTips = ref(null);
const showTips = (idItem, $event) => {
	const item = M.items$id[idItem];
	if(!item) { return; }


	$itemTips.value = item;
	$domTips.value.style.display = 'block';


	const tippyTipsItem = Tippy($event.target, {
		theme: 'nob',
		placement: 'bottom-start',
		content: $domTips.value,
		allowHTML: true,
		interactive: true,
		animation: '',
		duration: [0, 0],
		offset: [0, 0],
		appendTo: document.body,
		onHidden() { tippyTipsItem.destroy(); }
	});
	tippyTipsItem.show();
};
</script>


<style lang="sass" scoped>
p-pool-title
	@apply inblock w-1/2 box-border h-14 px-8 py-2 text-lg whitespace-nowrap
	background-color: color-mix(in srgb, var(--cBack) 95%, var(--cText))

	&:nth-child(2n+1)
		@apply border-l

	p-header
		@apply inblock w-10 h-full leading-[calc(var(--spc)*10)] text-center
		img
			@apply inline-block align-middle w-auto max-h-full

	&[shown-rarity-4]
		@apply h-[calc(var(--spc)*19)]
		p-header
			@apply leading-[calc(var(--spc)*15)]

	p-name-box
		@apply inblock ml-2
		p-boost
			@apply inblock text-xs font-normal elli p-0.5 mr-2
			&[_rarity-4]
				@apply text-[var(--cRarity4)] border-b border-[var(--cRarity4)] max-w-12
			&[_rarity-5]
				@apply text-[var(--cRarity5)] border-b border-[var(--cRarity5)]
		p-name
			@apply block h-5 text-[var(--cMain)] text-sm font-normal
		p-boosts
			@apply block h-5
		p-count
			@apply block h-5 text-sm font-normal
			[_split]
				@apply text-[var(--cText)] text-xs font-normal
			[_total]
				@apply text-[var(--cMain)]
			[_rarity-4]
				@apply text-[var(--cRarity4)]
			[_rarity-5]
				@apply text-[var(--cRarity5)]
			[_missed]
				@apply text-red-500
p-tips
	@apply hidden rounded-sm shadow-mdd px-4 py-2 bg-[var(--cMain)] border-4
	border-color: color-mix(in srgb, var(--cMain) 90%, black)
	[splash]
		@apply block w-[128px] mb-2
	p-info
		@apply block leading-8 whitespace-nowrap text-[var(--cTextMain)]
		&[title]
			@apply font-bold
		&[sub]
			@apply ml-2
</style>
