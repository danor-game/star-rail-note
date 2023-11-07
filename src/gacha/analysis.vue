<template>
	<p-fixed-topbar>
		<Texter v-model="$uid" item class="!w-48" label="UID" type="number" align="center" label-split="&nbsp;" />
		<Click item class="!w-16" text="分析" @click="query" />
		<Combo v-model="$optionShowRarity4" item class="!w-40" lightcone4 label="四星" align="center" label-split="&nbsp;" :options="optionsShowRarity4" />
	</p-fixed-topbar>
	<p-main-box>
		<p-gather-info>
			● <span value-highlight>{{ $logs.length }}</span> 次抽卡，
			平均 <span value-highlight>{{
				(($logs.length - Object.values(A.typesGacha).map(p => p.countInvestNext).reduce((acc, cur) => acc + cur, 0)) / ($countCharacter5 + $countLightcone5)).toFixed(2)
			}}</span> 抽出金
		</p-gather-info>
		<p-gather-info>
			● <span value-highlight>{{ $countCharacter5 }}</span> 五星角色，
			<span value-highlight>{{ $countCharacter4 }}</span> 四星角色
		</p-gather-info>
		<p-gather-info>
			● <span value-highlight>{{ $countLightcone5 }}</span> 五星光锥，
			<span value-highlight>{{ $countLightcone4 }}</span> 四星光锥
		</p-gather-info>


		<p-box gacha-type>
			<p-title>● 按<span value-highlight-xl>跃迁类型</span>概览</p-title>
			<p-gathers>
				<p-gather v-for="analysis of A.typesGacha" :key="`gather-type-${analysis.id}`">
					<p-title>{{ analysis.name }}</p-title>
					<p-info><span value-highlight>{{ analysis.logs.length }}</span> 跃迁</p-info>
					<p-info><span value-highlight>{{ String(analysis.logs5.length).padStart(2, '&nbsp;') }}</span> 五星</p-info>
					<p-info><span value-highlight>{{ String(analysis.logs4.length).padStart(2, '&nbsp;') }}</span> 四星</p-info>
				</p-gather>
			</p-gathers>
		</p-box>
		<div />


		<p-box gacha-pool-detail>
			<p-title>● 按<span value-highlight-xl>跃迁活动</span>详细</p-title>
			<p-gathers>
				<p-gather v-for="analysis of A.pools " :id="`pool-detail-${analysis.pool.id}`" :key="`gather-pool-detail-${analysis.id}`">
					<p-title>
						<p-header v-if="analysis.pool.itemsBoost5?.[0]"><img :src="`./image/item/${analysis.pool.itemsBoost5[0]}.png`" /></p-header>
						<p-name-box>
							<p-name>
								<span>{{ analysis.name }}</span>
								<p-boost v-if="analysis.pool.typeItem == 'character'" _rarity-5>
									&nbsp;{{ M.characters$id[analysis.pool.itemsBoost5[0]]?.name }}
								</p-boost>
								<p-boost v-if="analysis.pool.typeItem == 'lightcone'" _rarity-5>
									&nbsp;{{ M.characters$id[M.lightcones$id[analysis.pool.itemsBoost5[0]]?.characterBest]?.name }}
								</p-boost>
								<p-boost v-if="analysis.pool.typeItem == 'character' && $shownCharacterRarity4" _rarity-4>
									&nbsp;{{ analysis.pool.itemsBoost4.map(idItem => M.items$id[idItem]?.name).join(' ') }}
								</p-boost>
								<p-boost v-if="analysis.pool.typeItem == 'lightcone' && $shownLightconeRarity4" _rarity-4>
									&nbsp;{{ analysis.pool.itemsBoost4.map(idItem => M.items$id[idItem]?.name).join(' ') }}
								</p-boost>
							</p-name>
							<p-count>
								<span _total>{{ analysis.logs.length }}</span>
								<span class="text-sm"> 抽 </span>
								<span _rarity-5>{{ analysis.logs5.length }}</span>
								<sup _missed class="align-super">{{ analysis.logs5.filter(l => l.missed).length }}</sup>
								<span class="text-sm"> 五星 </span>
								<span v-if="$optionShowRarity4 != 'none'" _rarity-4>{{ analysis.logs4.length }}</span>
								<span v-if="$optionShowRarity4 != 'none'" class="text-sm"> 四星</span>
							</p-count>
						</p-name-box>
					</p-title>

					<template v-if="analysis.poolsSub.length>1">
						<p-title v-for="analysisSub of analysis.poolsSub" :key="`gather-pool-sub-detail-${analysis.id}-${analysisSub.id}`" class="ml-8">
							<p-header v-if="analysisSub.pool.itemsBoost5?.[0]"><img :src="`./image/item/${analysisSub.pool.itemsBoost5[0]}.png`" /></p-header>
							<p-name-box>
								<p-name _sub>
									<span>{{ analysisSub.name }}</span>
									<p-boost v-if="analysisSub.pool.typeItem == 'character'" _rarity-5>
										&nbsp;{{ M.characters$id[analysisSub.pool.itemsBoost5[0]]?.name }}
									</p-boost>
									<p-boost v-if="analysisSub.pool.typeItem == 'lightcone'" _rarity-5>
										&nbsp;{{ M.characters$id[M.lightcones$id[analysisSub.pool.itemsBoost5[0]]?.characterBest]?.name }}
									</p-boost>
									<p-boost v-if="analysisSub.pool.typeItem == 'character' && $shownCharacterRarity4" _rarity-4>
										&nbsp;{{ analysisSub.pool.itemsBoost4.map(idItem => M.items$id[idItem]?.name).join(' ') }}
									</p-boost>
									<p-boost v-if="analysisSub.pool.typeItem == 'lightcone' && $shownLightconeRarity4" _rarity-4>
										&nbsp;{{ analysisSub.pool.itemsBoost4.map(idItem => M.items$id[idItem]?.name).join(' ') }}
									</p-boost>
								</p-name>
								<p-count>
									<span _total>{{ String(analysisSub.logs.length).padStart('3', '&nbsp;') }}</span>
									<span _split> 抽 </span>
									<span _rarity-5>{{ String(analysisSub.logs5.length).padStart('2', '&nbsp;') }}</span>
									<sup _missed>{{ analysisSub.logs5.filter(l => l.missed).length }}</sup>
									<span _split> 五星 </span>
									<span v-if="$optionShowRarity4 != 'none'" _rarity-4>{{ String(analysisSub.logs4.length).padStart('2', '&nbsp;') }}</span>
									<span v-if="$optionShowRarity4 != 'none'" _split> 四星</span>
								</p-count>
							</p-name-box>
						</p-title>
					</template>

					<p-gachas>
						<GachaItem v-if="analysis.countInvestNext" type="count-invest-next" :type-gacha="analysis.pool.type" :count-invest="analysis.countInvestNext" />
						<GachaItem v-for="log of analysis.logsRare" :key="`gather-pool-detail-${analysis.id}-${log.id}`" :log="log" />
						<GachaItem v-if="analysis.countInvestPrev" type="count-invest-prev" :type-gacha="analysis.pool.type" :count-invest="analysis.countInvestPrev" />
					</p-gachas>
				</p-gather>
			</p-gathers>
		</p-box>


		<!-- <p-box gacha-pool-detail>
			<p-line>● 按<span value-highlight-xl>跃迁类型</span>详细</p-line>
			<p-gather v-for="analysis of A.typesGacha" :id="`typeGacha-detail-${analysis.id}`" :key="`gather-typeGacha-detail-${analysis.id}`"
				_width-4 class="block"
			>
				<p-line class="mb-6">
					<span class="text-lg font-bold text-[var(--cMain)]">{{ analysis.name }}</span>
					<span class="float-right text-right">
						<span value-highlight>{{ analysis.logs.length }}</span> 抽卡
						<span value-highlight>{{ String(analysis.logs5.length).padStart(2, '&nbsp;') }}</span> 五星
						<span value-highlight>{{ String(analysis.logs4.length).padStart(2, '&nbsp;') }}</span> 四星
					</span>
				</p-line>
				<p-line>
					<p-item v-if="analysis.countInvestNext" class="mb-4">
						<p-header _unknown>?</p-header>
						<p-name fit>当前已垫 <span count style="color: var(--cMain)">{{ String(analysis.countInvestNext).padStart(2, '&nbsp;') }}</span> 抽</p-name>
					</p-item>
					<p-item v-for="log of analysis.logsRare " :key="`gather-typeGacha-detail-${analysis.id}-${log.id}`"
						:_rarity-5="brop(M.items$id[log.item]?.rarity == 5)"
						:_rarity-4="brop(M.items$id[log.item]?.rarity == 4)"
					>
						<p-header @mouseenter="showItemTips(log.item, $event)"><img :src="`./image/item/${log.item}.png`" /></p-header>
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
							<p-value v-if="log.countInvestPrev" prev
								:style="{ width: `${100 * (log.countInvestPrev ?? 0) / (M.typesGacha$id[log.type]?.minimum5 ?? 90)}%` }"
							/>
						</p-progress>
						<p-progress-text v-if="log.countInvest && log.countInvestPrev">
							<span count>{{ String(log.countInvest).padStart(2, '&nbsp;') }}</span>
							<span :missed="brop(log.missed)">{{ log.missed ? ' 歪' : ' 抽' }}</span>
							<span count-sm>&nbsp;{{ log.countInvestPrev }}</span>+<span count-sm>{{ log.countInvest - log.countInvestPrev }}</span>
						</p-progress-text>
						<p-progress-text v-else-if="log.countInvest">
							<span count>{{ String(log.countInvest).padStart(2, '&nbsp;') }}</span>
							<span :missed="brop(log.missed)">{{ log.missed ? ' 歪' : ' 抽' }}</span>
						</p-progress-text>
					</p-item>
					<p-item v-if="analysis.countInvestPrev" class="mt-4">
						<p-header _unknown>?</p-header>
						<p-name fit>上期已垫 <span count style="color: var(--cMain)">{{ String(analysis.countInvestPrev).padStart(2, '&nbsp;') }}</span> 抽</p-name>
					</p-item>
				</p-line>
			</p-gather>
		</p-box> -->
	</p-main-box>
</template>

<script setup>
	import { computed, onMounted, ref } from 'vue';

	import Tippy from 'tippy.js';
	import '@nuogz/vue-tip/src/index.css';

	import { tabAdmin } from '@nuogz/vue-sidebar';
	import { Click, Combo, Texter } from '@nuogz/vue-components';
	import { $fail } from '@nuogz/vue-alert';

	import M from '../lib/meta.js';

	import analyseGacha from './analyseGacha.js';
	import loadProfiles from '../profile/load-profiles.js';

	import GachaItem from './comp/gacha-item.vue';



	const now = ref(null);
	onMounted(() => tabAdmin.emitChanged('mounted'));
	tabAdmin.addTabHandle('gacha-analysis', now, tab => {
		const [uid] = tab.params;
		if(!uid) { return; }

		$uid.value = uid;
		query();
	});



	const optionsShowRarity4 = [
		{ value: 'all', text: '全部' },
		{ value: 'character', text: '角色' },
		{ value: 'lightcone', text: '光锥' },
		{ value: 'none', text: '隐藏' },
	];
	const $optionShowRarity4 = ref('none');
	const $shownCharacterRarity4 = computed(() => $optionShowRarity4.value == 'all' || $optionShowRarity4.value == 'character');
	const $shownLightconeRarity4 = computed(() => $optionShowRarity4.value == 'all' || $optionShowRarity4.value == 'lightcone');



	const $uid = ref(localStorage.getItem('last-analysis-uid') ?? '');
	/** @type {import('vue').Ref<import('../../lib/fetch-log.js').ParsedLog[]>} */
	const $logs = ref([]);

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
	onMounted(query);



	const A = computed(() => analyseGacha($logs.value, $shownCharacterRarity4.value, $shownLightconeRarity4.value));
</script>


<style lang="sass" scoped>
p-fixed-topbar
	@apply block p-4 leading-8 fixed w-full h-16 z-50 shadow-mdd
	background-color: var(--cBack)

	>[item]
		@apply inblock w-auto mr-4 h-8 leading-8 mb-2


p-main-box
	// @apply border-2 border-red-600
	@apply grid grid-cols-2 gap-2
	@apply relative mx-auto p-4 w-full leading-8 top-16
	background-color: color-mix(in srgb, var(--cBack) 75%, black)


	[value-highlight]
		@apply font-bold text-2xl text-[var(--cMain)] align-super
	[value-highlight-xl]
		@apply font-bold text-xl text-[var(--cMain)]


	p-gather-info
		@apply col-span-full

	p-box[gacha-type]
		@apply mb-2

		p-title
			@apply block mb-2

		p-gathers
			@apply grid grid-cols-4 gap-2

		p-gather
			@apply inblock border border-[var(--cBorderBack)] rounded-sm
			@apply p-4

			p-title
				@apply text-lg font-bold mb-2

			p-info
				@apply block mb-0 mt-2 text-right

	p-box[gacha-pool]
		p-title
			@apply block mb-2

		p-gathers
			@apply grid grid-cols-2 gap-2

		p-gather
			@apply border border-[var(--cBorderBack)] rounded-sm
			@apply p-4

			p-title
				@apply text-lg font-bold mb-2

				[jumpable]
					@apply text-[var(--cMain)] cursor-pointer select-none

				p-sub
					@apply text-xs font-normal

			p-sub-info
				@apply block elli w-full text-sm

			p-info
				@apply block elli w-full

	p-box[gacha-pool-detail]
		@apply col-span-2
		@apply grid grid-cols-1 gap-2

		p-gathers
			@apply grid grid-cols-2 gap-2

		p-gather
			@apply border border-[var(--cBorderBack)] rounded-sm

			p-title
				@apply block box-content p-4 mb-2 h-12 text-lg
				background-color: color-mix(in srgb, var(--cBack) 90%, black)

				p-header
					@apply inblock w-12 h-12

					img
						@apply w-auto h-12 m-auto

				p-name-box
					@apply inblock h-12 ml-2

					p-name
						@apply inblock h-8 text-[var(--cMain)] text-lg leading-8 font-bold elli

						&[_sub]
							@apply text-base leading-8 font-normal

						p-boost
							@apply text-xs leading-8 font-normal
							&[_rarity-4]
								@apply text-[var(--cRarity4)]
							&[_rarity-5]
								@apply text-[var(--cRarity5)]
				p-count
					@apply block h-4 text-sm leading-4 font-bold

					[_split]
						@apply text-[var(--cTextBack)] font-normal
					[_total]
						@apply text-[var(--cMain)]
					[_rarity-4]
						@apply text-[var(--cRarity4)]
					[_rarity-5]
						@apply text-[var(--cRarity5)]
					[_missed]
						@apply text-red-700 align-super

			p-gachas
				@apply block col-span-2 p-4

				:deep(p-gacha-item)
					@apply mb-1
</style>
