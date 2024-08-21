<template>
	<p-gacha-item v-if="props.type == 'count-invest-next' || props.type == 'count-invest-prev'">
		<p-header _unknown>?</p-header>
		<p-name>
			<span>{{ textInvest$type[props.type] }}已垫&nbsp;</span>
		</p-name>
		<p-progress>
			<p-progress-text>
				<span count>{{ String(countInvest).padStart(2, '&nbsp;') }}</span>
			</p-progress-text>

			<p-value-bar v-if="countInvest" invest
				:style="{ width: `${100 * (countInvest ?? 0) / (M.typesPoolGacha$id[typeGacha]?.minimum5 ?? 90)}%` }"
			/>
		</p-progress>
	</p-gacha-item>

	<p-gacha-item v-if="props.type == 'log' && log">
		<p-header ref="domGachaItemHeader"><img :src="`./image/item/${props.log.item}.png`" /></p-header>
		<p-name :rarity="rarityNow">{{ itemNow?.name }}</p-name>
		<p-progress v-if="rarityNow == 5">
			<p-progress-text v-if="props.a?.countsInvest$id[props.log.id] && props.a?.countsInvestPrev$id[props.log.id]">
				<span count>{{ String(props.a?.countsInvest$id[props.log.id]).padStart(2, '&nbsp;') }}</span>
				<span count-sm class="ml-1">{{ props.a?.countsInvestPrev$id[props.log.id] }}+{{ props.a?.countsInvest$id[props.log.id] - props.a?.countsInvestPrev$id[props.log.id] }}</span>
			</p-progress-text>
			<p-progress-text v-else-if="props.a?.countsInvest$id[props.log.id]">
				<span count>{{ String(props.a?.countsInvest$id[props.log.id]).padStart(2, '&nbsp;') }}</span>
			</p-progress-text>
			<p-missed-text v-if="props.a?.misseds$id[props.log.id]">歪</p-missed-text>
			<p-value-bar
				:missed="brop(props.a?.misseds$id[props.log.id])"
				:style="{
					width: `${100 * (props.a?.countsInvest$id[props.log.id] ?? 0) / (M.typesPoolGacha$id[M.poolsGacha$id[props.log.pool]?.type]?.minimum5 ?? 90)}%`,
					backgroundColor: props.a?.misseds$id[props.log.id] ? null : pickGradientColor(
						[250, 204, 21],
						[52, 211, 153],
						(props.a?.countsInvest$id[props.log.id] ?? 0) / (M.typesPoolGacha$id[M.poolsGacha$id[props.log.pool]?.type]?.minimum5 ?? 90)
					)
				}"
			/>
			<p-value-bar v-if="props.a?.countsInvestPrev$id[props.log.id]" prev
				:style="{ width: `${100 * (props.a?.countsInvestPrev$id[props.log.id] ?? 0) / (M.typesPoolGacha$id[M.poolsGacha$id[props.log.pool]?.type]?.minimum5 ?? 90)}%` }"
			/>
		</p-progress>
	</p-gacha-item>

	<p-tips-item v-if="props.type == 'log' && log" ref="domTipsItem">
		<img :src="`./image/item/${itemNow.id}.png`" />
		<p-info>{{ itemNow.name }} {{ M.paths$id[itemNow.path]?.name }} {{ M.elements$id[itemNow.element]?.name }}</p-info>
	</p-tips-item>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';

import Tippy from 'tippy.js';
import '@nuogz/vue-tip/src/index.css';

import M from '../../lib/meta.js';



const props = defineProps({
	/** 显示类型 */
	type: { type: String, default: 'log' },
	/** 抽卡类型 */
	typeGacha: { type: [String], default: '11' },
	/**
	 * 抽卡日志
	 * @type {import('../../profile/fetch-log.js').ParsedLog}
	 */
	log: { type: Object, default: null },
	/**
	 * 分析结果
	 * @type {import('../analyseGacha.js').Analysis}
	 */
	a: { type: Object, default: null },
	/** 垫数 */
	countInvest: { type: [String, Number], default: 0 },
});


const textInvest$type = {
	'count-invest-next': '当期',
	'count-invest-prev': '上期',
};


const itemNow = computed(() => M.items$id[props.log?.item]);
const rarityNow = computed(() => itemNow.value?.rarity);


const domGachaItemHeader = ref(null);
const domTipsItem = ref(null);
/** @type {import('vue').Ref<import('tippy.js').Instance} */
const tippyTipsItem = ref(null);
onMounted(() => {
	if(domGachaItemHeader.value) {
		tippyTipsItem.value = Tippy(domGachaItemHeader.value, {
			theme: 'nob',
			placement: 'bottom-start',
			content: domTipsItem.value,
			allowHTML: true,
			interactive: true,
			animation: '',
			duration: [0, 0],
			offset: [0, 0],
			appendTo: document.body,
		});
	}
});
onUnmounted(() => tippyTipsItem.value?.destroy());


const pickGradientColor = (color1, color2, ratio) => {
	const ratio1 = ratio;
	const ratio2 = 1 - ratio1;

	const rgb = [
		Math.round(color1[0] * ratio1 + color2[0] * ratio2),
		Math.round(color1[1] * ratio1 + color2[1] * ratio2),
		Math.round(color1[2] * ratio1 + color2[2] * ratio2)
	];

	return `RGB(${rgb.join(',')})`;
};
</script>


<style lang="sass" scoped>
p-gacha-item
	@apply block whitespace-nowrap h-10
	&:has([rarity="4"])
		@apply inblock pr-2

	p-header
		@apply inblock relative w-10 h-10 float-left
		&[_unknown]
			@apply text-2xl leading-10 text-center
			@apply rounded-full border-2 leading-9 border-[var(--TextBack)] border-transparent
		img
			@apply w-auto h-10 m-auto

	p-name
		@apply inblock relative w-24 h-10 mx-2 leading-10 elli float-left
		&[rarity="5"]
			@apply text-[var(--cRarity5)]
		&[rarity="4"]
			@apply w-fit text-[var(--cRarity4)]
		&[fit]
			@apply w-fit

	p-progress
		@apply relative top-1 block max-w-sm h-8 ml-2 rounded-sm overflow-hidden bg-[var(--cBackProgress)]
		p-value-bar
			@apply relative block w-full h-full
			&[missed]
				@apply bg-red-400
			&[invest]
				@apply bg-blue-400
			&[prev]
				@apply bg-blue-400 -top-1
		p-progress-text
			@apply ml-2 h-8 leading-8 text-black
			@apply absolute z-10
			[count]
				@apply text-white text-xl
			[count-sm]
				@apply text-white text-sm
			[missed]
				@apply text-red-700
		p-missed-text
			@apply float-right z-10 relative top-0.5 right-2 w-7 h-7 border-2 border-red-700 border-transparent rounded-full
			@apply text-red-700 text-base leading-6 text-center align-middle

p-tips-item
	@apply block rounded-sm shadow-mdd px-4 py-2 bg-[var(--cMain)] border-4
	border-color: color-mix(in srgb, var(--cMain) 90%, black)
	img
		@apply block w-[128px]
	p-info
		@apply block whitespace-nowrap text-[var(--cTextMain)]
</style>
