<template>
	<p-pool-title :sub="brop(props.display == 'sub')">
		<p-header v-if="props.analysis?.pool?.itemsBoost5?.[0]">
			<img :src="`./image/item/${props.analysis.pool.itemsBoost5[0]}.png`" />
		</p-header>

		<p-name-box>
			<p-name>
				<span>{{ props.analysis.name }}</span>
				<sup v-if="props.analysis.pool?.rerun">{{ props.analysis.pool?.rerun + 1 }}</sup>
				<template v-if="props.analysis.pool">
					<p-boost v-if="props.analysis.pool.typeItem == 'character'" _rarity-5>
						&nbsp;{{ M.characters$id[props.analysis.pool.itemsBoost5[0]]?.name }}
					</p-boost>
					<p-boost v-if="props.analysis.pool.typeItem == 'lightcone'" _rarity-5>
						&nbsp;{{ M.characters$id[M.lightcones$id[props.analysis.pool.itemsBoost5[0]]?.characterBest]?.name }}
					</p-boost>
					<p-boost v-if="props.analysis.pool.typeItem == 'character' && shownCharacterRarity4"
						v-tip="props.analysis.pool.itemsBoost4.map(idItem => M.items$id[idItem]?.name).join(' ')"
						_rarity-4
					>
						&nbsp;{{ props.analysis.pool.itemsBoost4.map(idItem => M.items$id[idItem]?.name).join(' ') }}
					</p-boost>
					<p-boost v-if="props.analysis.pool.typeItem == 'lightcone' && shownLightconeRarity4"
						v-tip="props.analysis.pool.itemsBoost4.map(idItem => M.items$id[idItem]?.name).join(' ')"
						_rarity-4
					>
						&nbsp;{{ props.analysis.pool.itemsBoost4.map(idItem => M.items$id[idItem]?.name).join(' ') }}
					</p-boost>
				</template>
			</p-name>

			<p-count>
				<span _total>{{ props.analysis.logs.length }}</span>
				<span _split> 抽 </span>
				<span _rarity-5>{{ props.analysis.logs5.length }}</span>
				<sup _missed>{{ props.analysis.logs5.filter(l => l.missed).length }}</sup>
				<span _split> 五星 </span>
				<span v-if="shownCharacterRarity4 || shownLightconeRarity4" _rarity-4>{{ props.analysis.logs4.length }}</span>
				<span v-if="shownCharacterRarity4 || shownLightconeRarity4" _split> 四星</span>
			</p-count>
		</p-name-box>
	</p-pool-title>
</template>

<script setup>
	import M from '../../lib/meta.js';



	const props = defineProps({
		/** 显示类型 */
		display: { type: String, default: 'main' },
		/**
		 * 抽卡分析
		 * @type {import('../analyseGacha.js').AnalysisByGachaPool}
		 */
		analysis: { type: Object, default: null },
		/** 显示四星角色 */
		shownCharacterRarity4: { type: Boolean, default: false },
		/** 显示四星光锥 */
		shownLightconeRarity4: { type: Boolean, default: false },
	});
</script>


<style lang="sass" scoped>
p-pool-title
	@apply block box-content p-4 h-12 text-lg whitespace-nowrap
	background-color: color-mix(in srgb, var(--cBack) 90%, black)

	p-header
		@apply inblock w-12 h-12
		img
			@apply w-auto h-12 m-auto

	p-name-box
		@apply inblock ml-2
		p-name
			@apply block h-7 text-[var(--cMain)] text-lg font-bold
			p-boost
				@apply text-xs font-normal
				&[_rarity-4]
					@apply text-[var(--cRarity4)]
				&[_rarity-5]
					@apply text-[var(--cRarity5)]
		p-count
			@apply block h-5 text-base font-bold
			[_split]
				@apply text-[var(--cTextBack)] text-xs font-normal
			[_total]
				@apply text-[var(--cMain)]
			[_rarity-4]
				@apply text-[var(--cRarity4)]
			[_rarity-5]
				@apply text-[var(--cRarity5)]
			[_missed]
				@apply text-red-600

	&[sub]
		@apply h-10 p-2
		p-header
			@apply w-10 h-10
			img
				@apply h-10
		p-name-box
			p-name
				@apply h-5 text-sm font-normal
			p-count
				@apply h-5 text-sm font-normal
</style>
