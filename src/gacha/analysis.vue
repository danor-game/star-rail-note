<template>
	<p-panel>
		<Texter v-model="$uid" item uid label="UID" type="number" align="center" />
		<Click item query text="查询" @click="query" />
	</p-panel>
	<p-gacha-box>
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
					<span class="text-lg font-bold text-[var(--colorMain)]">{{ analysis.name }}</span>
					<span v-if="analysis.pool.typeItem == 'character'" class="text-xs">&nbsp;{{ M.characters$id[analysis.pool.itemsBoost5[0]]?.name }}</span>
					<span v-if="analysis.pool.typeItem == 'lightcone'" class="text-xs">&nbsp;{{ M.characters$id[M.lightcones$id[analysis.pool.itemsBoost5[0]]?.characterBest]?.name }}光锥</span>
					<span class="float-right text-right"><span value-highlight>{{ analysis.logs.length }}</span> 次抽卡 <span value-highlight>{{ String(analysis.logs5.length).padStart(2, '&nbsp;') }}</span> 五星对象 <span value-highlight>{{ String(analysis.logs4.length).padStart(2, '&nbsp;') }}</span> 四星对象</span>
					<template v-if="analysis.pool.itemsBoost5">
						<br />
						<span class="text-sm leading-10 text-yellow-400">{{ analysis.pool.itemsBoost5.map(idItem => M.items$id[idItem]?.name).join(' / ') }}</span>
						/
						<span class="text-sm leading-10 text-purple-400">{{ analysis.pool.itemsBoost4.map(idItem => M.items$id[idItem]?.name).join(' / ') }}</span>
					</template>
				</p-line>
				<p-line>
					<p-item v-if="analysis.countInvestNext">
						<p-image _unknown>?</p-image>
						<p-name class="w-fit">当前已垫 <span style="color: var(--colorMain)">{{ String(analysis.countInvestNext).padStart(2, '&nbsp;') }}</span> 抽</p-name>
					</p-item>
					<p-item v-for="log of analysis.logsRare " :key="`gather-pool-detail-${id}-${log.id}`"
						:_rarity-5="brop(M.items$id[log.item]?.rarity == 5)"
						:_rarity-4="brop(M.items$id[log.item]?.rarity == 4)"
					>
						<p-image><img :src="`../resource/item/${log.item}.png`" /></p-image>
						<p-name v-tip.duration-1="M.items$id[log.item]?.name ?? ''">{{ M.items$id[log.item]?.name }}</p-name>
						<progress v-if="M.items$id[log.item]?.rarity == 5" style="width: calc(0.1rem * 140);"
							:_worse="brop(!log.missed && log.countInvest >= 45)"
							:_missed="brop(log.missed)"
							max="90" :value="log.countInvest ?? 0"
						/>
						<p-progress-text v-if="log.countInvest && log.countInvestPrev">
							<span style="color:var(--colorMain)">{{ String(log.countInvest).padStart(2, '&nbsp;') }}</span> 抽
							（本期 <span style="color:var(--colorMain)">{{ log.countInvest - log.countInvestPrev }}</span> + 上期 <span style="color:var(--colorMain)">{{ log.countInvestPrev }}</span>）
						</p-progress-text>
						<p-progress-text v-else-if="log.countInvest"><span style="color:var(--colorMain)">{{ String(log.countInvest).padStart(2, '&nbsp;') }}</span> 抽</p-progress-text>
						<p-miss v-if="log.missed">歪😭</p-miss>
					</p-item>
					<p-item v-if="analysis.countInvestPrev">
						<p-image _unknown>?</p-image>
						<p-name class="w-fit">上期已垫 <span style="color:var(--colorMain)">{{ String(analysis.countInvestPrev).padStart(2, '&nbsp;') }}</span> 抽</p-name>
					</p-item>
				</p-line>
			</p-gather>
		</p-box>
	</p-gacha-box>
</template>

<script setup>
	import { computed, onMounted, ref } from 'vue';
	import { Click, Texter } from '@nuogz/vue-components';
	import { $fail } from '@nuogz/vue-alert';

	import M from '../lib/meta.js';

	import analyseGacha from './analyseGacha.js';
	import Day from '../lib/day.pure.js';



	const name$typeItemPool = {
		character: '角色',
		lightcone: '光锥',
	};
	const order$typeItemPool = {
		character: 1,
		lightcone: 2,
	};

	const $uid = ref(window.DEFAULT_UID);
	/** @type {import('vue').Ref<import('../../lib/fetch-log.js').ParsedLog[]>} */
	const $logs = ref([]);


	const $countLightcone5 = computed(() => $logs.value.filter(log => M.lightcones$id[log.item]?.rarity == 5).length);
	const $countCharacter5 = computed(() => $logs.value.filter(log => M.characters$id[log.item]?.rarity == 5).length);
	const $countLightcone4 = computed(() => $logs.value.filter(log => M.lightcones$id[log.item]?.rarity == 4).length);
	const $countCharacter4 = computed(() => $logs.value.filter(log => M.characters$id[log.item]?.rarity == 4).length);


	const query = async () => {
		const uid = $uid.value;

		try {
			$logs.value = (await import(`../../data/${uid}-parsed.json`)).default;
		}
		catch(error) {
			if(String(error).includes('Unknown variable dynamic import')) { $fail('获取抽卡记录', '找不到数据'); }
			else { $fail('获取抽卡记录', error); }
		}
	};


	const A = computed(() => analyseGacha($logs.value));


	onMounted(query);


	const sortEntriesByValueOrder = ([, a], [, b]) => a.order - b.order;
	const sortEntriesByValueOrder2 = ([, a], [, b]) => order$typeItemPool[a.pool.typeItem] - order$typeItemPool[b.pool.typeItem] || a.order - b.order;


	const scrollPoolDetailIntoView = id => document.querySelector(`#pool-detail-${id}`).scrollIntoView({ block: 'center', behavior: 'smooth' });
</script>


<style lang="sass">
p-panel
	@apply block p-4 leading-8 fixed w-full h-16 z-50 shadow-mdd
	background-color: var(--colorBackground)

	>[item]
		@apply inblock mr-4 h-8 leading-8 mb-2

	>[uid]
		@apply w-48
	>[query]
		@apply w-16

p-gacha-box
	--widthBox: calc(theme("spacing.1") * 40)
	--widthSide: calc(theme("spacing.1") * 4)

	@apply block relative p-4 leading-8 w-auto bg-gray-800 rounded-md top-16

	width: calc(var(--widthBox) * 4 + var(--widthSide) * 2 * (4 + 1))
	left: calc(50% - (var(--widthBox) * 4 + var(--widthSide) * 2 * (4 + 1)) / 2)


	p-line
		@apply block w-full mb-2

		[scrollable]
			@apply mb-2 cursor-pointer select-none trans

			&:hover
				@apply text-[var(--colorMain)]

	[value-highlight]
		@apply font-bold text-2xl text-[var(--colorMain)]
	[value-highlight-xl]
		@apply font-bold text-xl text-[var(--colorMain)]


	p-box
		@apply block w-full my-2

		&[_limit-2]
			width: calc(theme("spacing.1") * ((40 * 2 + 4 * 2) * 2 + 4 * 4))

	p-gather
		@apply inblock border rounded-md
		@apply w-[var(--widthBox)] mx-[var(--widthSide)] mb-[var(--widthSide)] p-2

		&[_width-2]
			width: calc(var(--widthBox) * 2 + var(--widthSide) * 2 * (2 - 1))

		&[_width-4]
			width: calc(var(--widthBox) * 4 + var(--widthSide) * 2 * (4 - 1))


		p-item
			@apply block relative rounded-md w-fit px-4 m-1

			p-image
				@apply inblock w-10 h-10 leading-10 mr-2 text-2xl text-center

				&[_unknown]
					@apply rounded-full border-2 leading-9

			p-name
				@apply inblock w-24 h-10 leading-10 elli

			p-progress-text
				@apply inblock ml-2 h-10 leading-10

			p-miss
				@apply inblock ml-2 h-10 leading-10 text-red-400

			&[_rarity-5]
				>p-name
					@apply text-yellow-400


			&[_rarity-4]
				@apply inblock

				>p-name
					@apply w-fit text-purple-400


			progress
				@apply inblock h-8 rounded-md relative top-1 ml-2
				color: var(--colorTextMain)


				&::-webkit-progress-bar
					@apply rounded-md relative h-full

					background-color: lightgray

				&::-webkit-progress-value
					@apply rounded-md bg-emerald-400


				&[_missed]::-webkit-progress-value
					@apply bg-red-400

				&[_worse]::-webkit-progress-value
					@apply bg-yellow-400
</style>
