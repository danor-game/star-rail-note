<template>
	<p-fixed-topbar>
		<Texter v-model="$uid" item class="!w-48" label="UID" type="number" align="center" label-split="&nbsp;" />
		<Click item class="!w-16" text="分析" @click="query" />
		<Combo v-model="$showCharacter4" item class="!w-40" lightcone4 label="四星角色" align="center" label-split="&nbsp;" :options="listShownHidden" />
		<Combo v-model="$showLightcone4" item class="!w-40" lightcone4 label="四星光锥" align="center" label-split="&nbsp;" :options="listShownHidden" />
	</p-fixed-topbar>
	<p-main-box>
		<p-line>
			● <span value-highlight>{{ $logs.length }}</span> 次抽卡，
			平均 <span value-highlight>{{
				(($logs.length - Object.values(A.typesGacha).map(p => p.countInvestNext).reduce((acc, cur) => acc + cur, 0)) / ($countCharacter5 + $countLightcone5)).toFixed(2)
			}}</span> 抽出金
		</p-line>
		<p-line>● <span value-highlight>{{ $countCharacter5 }}</span> 位五星角色，<span value-highlight>{{ $countCharacter4 }}</span> 位四星角色</p-line>
		<p-line>● <span value-highlight>{{ $countLightcone5 }}</span> 张五星光锥，<span value-highlight>{{ $countLightcone4 }}</span> 张四星光锥</p-line>


		<p-box>
			<p-line>● 按<span value-highlight-xl>跃迁类型</span>概览</p-line>
			<p-gather v-for="[id, analysis] of Object.entries(A.typesGacha).sort(sortEntriesByValueOrder)" :key="`gather-type-${id}`">
				<p-line class="text-lg font-bold mb-2">{{ analysis.name }}</p-line>
				<p-line class="mb-0 mt-2 text-right"><span value-highlight>{{ analysis.logs.length }}</span> 次抽卡</p-line>
				<p-line class="mb-0 mt-2 text-right"><span value-highlight>{{ String(analysis.logs5.length).padStart(2, '&nbsp;') }}</span> 五星对象</p-line>
				<p-line class="mb-0 mt-2 text-right"><span value-highlight>{{ String(analysis.logs4.length).padStart(2, '&nbsp;') }}</span> 四星对象</p-line>
			</p-gather>
		</p-box>


		<!-- <p-box>
			<p-line>● 常规跃迁</p-line>
			<p-gather v-for="[id, analysis] of Object.entries(A.pools).filter(([, a]) => a.pool.type < 10).sort(sortEntriesByValueOrder)" :key="`type-gather-${id}`">
				<p-line class="mb-2">
					<span class="text-lg font-bold">{{ analysis.name }}</span>
					<span class="text-xs">{{ name$typeItemPool[analysis.pool.typeItem] }}</span>
				</p-line>
				<p-line class="mb-0 mt-2 text-right"><span value-highlight>{{ analysis.logs.length }}</span> 次抽卡</p-line>
				<p-line class="mb-0 mt-2 text-right"><span value-highlight>{{ String(analysis.logs5.length).padStart(2, '&nbsp;') }}</span> 五星对象</p-line>
				<p-line class="mb-0 mt-2 text-right"><span value-highlight>{{ String(analysis.logs4.length).padStart(2, '&nbsp;') }}</span> 四星对象</p-line>
			</p-gather>
		</p-box> -->

		<p-box _limit-2>
			<p-line>● 按<span value-highlight-xl>跃迁活动</span>概览</p-line>
			<p-gather v-for="[id, analysis] of Object.entries(A.pools).filter(([, a]) => a.pool.type > 10).sort(sortEntriesByValueOrder)" :key="`gather-pool-${id}`"
				_width-2
			>
				<p-line>
					<span v-tip="'跳转到详细'" class="text-lg font-bold" scrollable @click="scrollPoolDetailIntoView(analysis.pool.id)">{{ analysis.name }}</span>
					<span class="text-xs">&nbsp;{{ name$typeItemPool[analysis.pool.typeItem] }}池</span>
				</p-line>
				<p-line v-if="analysis.pool.itemsBoost5" class="text-sm">○ {{ analysis.pool.itemsBoost5.map(idItem => M.items$id[idItem]?.name).join(' / ') }}</p-line>
				<p-line v-if="analysis.pool.itemsBoost4" class="text-sm">○ {{ analysis.pool.itemsBoost4.map(idItem => M.items$id[idItem]?.name).join(' / ') }}</p-line>
				<p-line class="text-sm">○ {{ Day.unix(analysis.pool.timeEnd).format('MM月DD日 HH时mm分') }} 结束</p-line>
				<p-line class="mb-0 mt-2 text-right"><span value-highlight>{{ analysis.logs.length }}</span> 次抽卡 <span value-highlight>{{ String(analysis.logs5.length).padStart(2, '&nbsp;') }}</span> 五星对象 <span value-highlight>{{ String(analysis.logs4.length).padStart(2, '&nbsp;') }}</span> 四星对象</p-line>
			</p-gather>
		</p-box>
		<p-box>
			<p-line>● 按<span value-highlight-xl>跃迁活动</span>详细</p-line>
			<p-gather v-for="[id, analysis] of Object.entries(A.pools).sort(sortEntriesByValueOrder2) " :id="`pool-detail-${analysis.pool.id}`" :key="`gather-pool-detail-${id}`"
				_width-4 class="block"
			>
				<p-line class="mb-6">
					<p-image v-if="analysis.pool.itemsBoost5?.[0]"><img :src="`./image/item/${analysis.pool.itemsBoost5[0]}.png`" /></p-image>
					<span class="text-lg font-bold text-[var(--cMain)] h-10 leading-10">{{ analysis.name }}</span>
					<span v-if="analysis.pool.typeItem == 'character'" class="text-xs">&nbsp;{{ M.characters$id[analysis.pool.itemsBoost5[0]]?.name }}</span>
					<span v-if="analysis.pool.typeItem == 'lightcone'" class="text-xs">&nbsp;{{ M.characters$id[M.lightcones$id[analysis.pool.itemsBoost5[0]]?.characterBest]?.name }}</span>
					<span class="float-right text-right"><span value-highlight>{{ analysis.logs.length }}</span> 次抽卡 <span value-highlight>{{ String(analysis.logs5.length).padStart(2, '&nbsp;') }}</span> 五星对象 <span value-highlight>{{ String(analysis.logs4.length).padStart(2, '&nbsp;') }}</span> 四星对象</span>
					<template v-if="analysis.pool.itemsBoost5">
						<br />
						<span class="text-sm leading-10 text-yellow-400">{{ analysis.pool.itemsBoost5.map(idItem => M.items$id[idItem]?.name).join(' / ') }}</span>
						/
						<span class="text-sm leading-10 text-purple-400">{{ analysis.pool.itemsBoost4.map(idItem => M.items$id[idItem]?.name).join(' / ') }}</span>
					</template>
				</p-line>
				<p-line>
					<p-item v-if="analysis.countInvestNext" class="mb-4">
						<p-image _unknown>?</p-image>
						<p-name fit>当前已垫 <span count style="color: var(--cMain)">{{ String(analysis.countInvestNext).padStart(2, '&nbsp;') }}</span> 抽</p-name>
					</p-item>
					<p-item v-for="log of analysis.logsRare " :key="`gather-pool-detail-${id}-${log.id}`"
						:_rarity-5="brop(M.items$id[log.item]?.rarity == 5)"
						:_rarity-4="brop(M.items$id[log.item]?.rarity == 4)"
					>
						<p-image @mouseenter="showItemTips(log.item, $event)"><img :src="`./image/item/${log.item}.png`" /></p-image>
						<p-name @mouseenter="showItemTips(log.item, $event)">{{ M.items$id[log.item]?.name }}</p-name>
						<p-progress v-if="M.items$id[log.item]?.rarity == 5" :missed="brop(log.missed)">
							<p-value
								:style="{
									width: `${100 * (log.countInvest ?? 0) / (M.typesGacha$id[log.type]?.minimum5 ?? 90)}%`,
									backgroundColor: log.missed ? null : pickGradientColor(
										[250, 204, 21],
										[52, 211, 153],
										(log.countInvest ?? 0) / (M.typesGacha$id[log.type]?.minimum5 ?? 90)
									)
								}"
							/>
						</p-progress>
						<p-progress-text v-if="log.countInvest && log.countInvestPrev">
							<span count>{{ String(log.countInvest).padStart(2, '&nbsp;') }}</span>
							<span :missed="brop(log.missed)">{{ log.missed ? ' 歪' : ' 抽' }}</span>
							(本期 <span count>{{ log.countInvest - log.countInvestPrev }}</span> + 上期 <span count>{{ log.countInvestPrev }}</span>)
						</p-progress-text>
						<p-progress-text v-else-if="log.countInvest">
							<span count>{{ String(log.countInvest).padStart(2, '&nbsp;') }}</span>
							<span :missed="brop(log.missed)">{{ log.missed ? ' 歪' : ' 抽' }}</span>
						</p-progress-text>
					</p-item>
					<p-item v-if="analysis.countInvestPrev" class="mt-4">
						<p-image _unknown>?</p-image>
						<p-name fit>上期已垫 <span count style="color: var(--cMain)">{{ String(analysis.countInvestPrev).padStart(2, '&nbsp;') }}</span> 抽</p-name>
					</p-item>
				</p-line>
			</p-gather>
		</p-box>
		<p-box>
			<p-line>● 按<span value-highlight-xl>跃迁类型</span>详细</p-line>
			<p-gather v-for="[id, analysis] of Object.entries(A.typesGacha).sort(sortEntriesByValueOrder) " :id="`typeGacha-detail-${analysis.id}`" :key="`gather-typeGacha-detail-${id}`"
				_width-4 class="block"
			>
				<p-line class="mb-6">
					<span class="text-lg font-bold text-[var(--cMain)]">{{ analysis.name }}</span>
					<span class="float-right text-right"><span value-highlight>{{ analysis.logs.length }}</span> 次抽卡 <span value-highlight>{{ String(analysis.logs5.length).padStart(2, '&nbsp;') }}</span> 五星对象 <span value-highlight>{{ String(analysis.logs4.length).padStart(2, '&nbsp;') }}</span> 四星对象</span>
				</p-line>
				<p-line>
					<p-item v-if="analysis.countInvestNext" class="mb-4">
						<p-image _unknown>?</p-image>
						<p-name fit>当前已垫 <span count style="color: var(--cMain)">{{ String(analysis.countInvestNext).padStart(2, '&nbsp;') }}</span> 抽</p-name>
					</p-item>
					<p-item v-for="log of analysis.logsRare " :key="`gather-typeGacha-detail-${id}-${log.id}`"
						:_rarity-5="brop(M.items$id[log.item]?.rarity == 5)"
						:_rarity-4="brop(M.items$id[log.item]?.rarity == 4)"
					>
						<p-image @mouseenter="showItemTips(log.item, $event)"><img :src="`./image/item/${log.item}.png`" /></p-image>
						<p-name @mouseenter="showItemTips(log.item, $event)">{{ M.items$id[log.item]?.name }}</p-name>
						<p-progress v-if="M.items$id[log.item]?.rarity == 5" :missed="brop(log.missed)">
							<p-value
								:style="{
									width: `${100 * (log.countInvest ?? 0) / (M.typesGacha$id[log.type]?.minimum5 ?? 90)}%`,
									backgroundColor: log.missed ? null : pickGradientColor(
										[250, 204, 21],
										[52, 211, 153],
										(log.countInvest ?? 0) / (M.typesGacha$id[log.type]?.minimum5 ?? 90)
									)
								}"
							/>
						</p-progress>
						<p-progress-text v-if="log.countInvest && log.countInvestPrev">
							<span count>{{ String(log.countInvest).padStart(2, '&nbsp;') }}</span>
							<span :missed="brop(log.missed)">{{ log.missed ? ' 歪' : ' 抽' }}</span>
							(本期 <span count>{{ log.countInvest - log.countInvestPrev }}</span> + 上期 <span count>{{ log.countInvestPrev }}</span>)
						</p-progress-text>
						<p-progress-text v-else-if="log.countInvest">
							<span count>{{ String(log.countInvest).padStart(2, '&nbsp;') }}</span>
							<span :missed="brop(log.missed)">{{ log.missed ? ' 歪' : ' 抽' }}</span>
						</p-progress-text>
					</p-item>
					<p-item v-if="analysis.countInvestPrev" class="mt-4">
						<p-image _unknown>?</p-image>
						<p-name fit>上期已垫 <span count style="color: var(--cMain)">{{ String(analysis.countInvestPrev).padStart(2, '&nbsp;') }}</span> 抽</p-name>
					</p-item>
				</p-line>
			</p-gather>
		</p-box>
	</p-main-box>

	<p-tips-item ref="domTipsItem">
		<img :src="`./image/item/${itemTips?.id}.png`" />
		<p-info>▶ {{ itemTips?.name }} {{ M.paths$id[itemTips?.path]?.name }} {{ M.elements$id[itemTips?.element]?.name }}</p-info>
	</p-tips-item>
</template>

<script setup>
	import { computed, onMounted, ref } from 'vue';

	import Tippy from 'tippy.js';
	import '@nuogz/vue-tip/src/index.css';

	import { Click, Combo, Texter } from '@nuogz/vue-components';
	import { $fail } from '@nuogz/vue-alert';

	import M from '../lib/meta.js';

	import analyseGacha from './analyseGacha.js';
	import Day from '../lib/day.pure.js';
	import loadProfiles from '../profile/load-profiles.js';



	const listShownHidden = [
		{ value: true, text: '显示' },
		{ value: false, text: '隐藏' },
	];

	const name$typeItemPool = {
		character: '角色',
		lightcone: '光锥',
	};
	const order$typeItemPool = {
		character: 1,
		lightcone: 2,
	};

	const $uid = ref(localStorage.getItem('last-analysis-uid') ?? '');
	/** @type {import('vue').Ref<import('../../lib/fetch-log.js').ParsedLog[]>} */
	const $logs = ref([]);


	const $showCharacter4 = ref(false);
	const $showLightcone4 = ref(false);


	const $countLightcone5 = computed(() => $logs.value.filter(log => M.lightcones$id[log.item]?.rarity == 5).length);
	const $countCharacter5 = computed(() => $logs.value.filter(log => M.characters$id[log.item]?.rarity == 5).length);
	const $countLightcone4 = computed(() => $logs.value.filter(log => M.lightcones$id[log.item]?.rarity == 4).length);
	const $countCharacter4 = computed(() => $logs.value.filter(log => M.characters$id[log.item]?.rarity == 4).length);


	const query = async () => {
		const uid = $uid.value;


		try {
			const profiles = loadProfiles();


			const logs = profiles.find(profile => profile.uid == uid)?.logsParsed;

			if(!logs) { throw Error('找不到对应档案'); }

			$logs.value = logs;


			localStorage.setItem('last-analysis-uid', uid);
		}
		catch(error) {
			$fail('获取抽卡记录', error);
		}
	};


	const A = computed(() => analyseGacha($logs.value, $showCharacter4.value, $showLightcone4.value));



	onMounted(query);


	const sortEntriesByValueOrder = ([, a], [, b]) => a.order - b.order;
	const sortEntriesByValueOrder2 = ([, a], [, b]) => order$typeItemPool[a.pool.typeItem] - order$typeItemPool[b.pool.typeItem] || a.order - b.order;


	const scrollPoolDetailIntoView = id => document.querySelector(`#pool-detail-${id}`).scrollIntoView({ block: 'center', behavior: 'smooth' });


	const domTipsItem = ref(null);
	const itemTips = ref(null);
	const showItemTips = (idItem, $event) => {
		itemTips.value = M.items$id[idItem];

		Tippy($event.target, {
			theme: 'nob',
			placement: 'top-start',
			content: domTipsItem.value,
			allowHTML: true,
			interactive: true,
			animation: '',
			duration: [0, 0],
			offset: [1, 8],
			onHidden: tippy => tippy.destroy(),
		}).show();
	};
	onMounted(() => Tippy(document.body, { content: domTipsItem.value }).destroy());


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
p-fixed-topbar
	@apply block p-4 leading-8 fixed w-full h-16 z-50 shadow-mdd
	background-color: var(--cBack)

	>[item]
		@apply inblock w-auto mr-4 h-8 leading-8 mb-2


p-main-box
	--widthBox: calc(theme("spacing.1") * 40)
	--widthSide: calc(theme("spacing.1") * 4)

	@apply block relative p-4 leading-8 w-auto rounded-sm top-16
	background-color: color-mix(in srgb, var(--cBack) 95%, black)

	width: calc(var(--widthBox) * 4 + var(--widthSide) * 2 * (4 + 1))
	left: calc(50% - (var(--widthBox) * 4 + var(--widthSide) * 2 * (4 + 1)) / 2)


	p-line
		@apply block w-full mb-2

		[scrollable]
			@apply mb-2 cursor-pointer select-none trans text-[var(--cMain)]

			&:hover
				@apply text-[var(--cTextBack)]

	[value-highlight]
		@apply font-bold text-2xl text-[var(--cMain)]
	[value-highlight-xl]
		@apply font-bold text-xl text-[var(--cMain)]


	p-box
		@apply block w-full my-6

		&[_limit-2]
			width: calc(theme("spacing.1") * ((40 * 2 + 4 * 2) * 2 + 4 * 4))

	p-gather
		@apply inblock border border-[var(--cBorderBack)] rounded-sm
		@apply w-[var(--widthBox)] mx-[var(--widthSide)] mb-[var(--widthSide)] p-2

		&[_width-2]
			width: calc(var(--widthBox) * 2 + var(--widthSide) * 2 * (2 - 1))

		&[_width-4]
			width: calc(var(--widthBox) * 4 + var(--widthSide) * 2 * (4 - 1))

		p-image
			@apply inblock w-10 h-10 leading-10 mr-2 text-2xl text-center

			&[_unknown]
				@apply rounded-full border-2 leading-9

			img
				@apply max-h-full m-auto



		p-item
			@apply block relative rounded-sm w-fit px-4 m-1


			p-name
				@apply inblock w-24 h-10 leading-10 elli

				&[fit]
					@apply w-fit

			p-progress-text
				@apply inblock ml-2 h-10 leading-10
				@apply relative text-black
				left: calc( theme("spacing.1") * -64 )

			[count]
				@apply text-[snow] text-xl

			[missed]
				@apply text-red-700

			&[_rarity-5]
				>p-name
					@apply text-yellow-400


			&[_rarity-4]
				@apply inblock

				>p-name
					@apply w-fit text-purple-400


			p-progress
				@apply relative top-1 inblock w-64 h-8 ml-2 rounded-sm overflow-hidden bg-gray-400

				p-value
					@apply block h-full

				&[missed]>p-value
					@apply bg-red-400

p-tips-item
	@apply block rounded-sm shadow-mdd px-4 py-2 bg-[var(--cMain)] border-4
	border-color: color-mix(in srgb, var(--cMain) 90%, black)

	img
		@apply block w-[128px]

	p-info
		@apply block whitespace-nowrap
</style>
