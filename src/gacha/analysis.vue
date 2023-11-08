<template>
	<p-fixed-topbar>
		<Texter v-model="$uid" item class="!w-48" label="UID" type="number" align="center" label-split="&nbsp;" />
		<Click item class="!w-16" text="分析" @click="query" />
		<Combo v-model="$optionShowRarity4" item class="!w-32" lightcone4 label="四星" align="center" align-options="left" label-split="&nbsp;" :options="optionsShowRarity4" />
		<Combo v-model="$optionShowDetail" item class="!w-32" lightcone4 label="详细" align="center" align-options="left" label-split="&nbsp;" :options="optionsShownHidden" />
		<Combo v-model="$optionShowMatePool" item class="!w-36" lightcone4 label="子活动" align="center" align-options="left" label-split="&nbsp;" :options="optionsShownHidden" />
		<Combo v-model="$optionShowNewbiePool" item class="!w-40" lightcone4 label="新手跃迁" align="center" align-options="left" label-split="&nbsp;" :options="optionsShownHidden" />
	</p-fixed-topbar>

	<p-main-box>
		<p-box gacha-summary>
			<p-gather-info>
				● <span value-highlight>{{ $logs.length }}</span> 次抽卡，
				平均 <span value-highlight>{{
					(($logs.length - Object.values(A.typesPoolGacha).map(p => p.countInvestNext).reduce((acc, cur) => acc + cur, 0)) / ($countCharacter5 + $countLightcone5)).toFixed(2)
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
		</p-box>

		<p-box gacha-type>
			<p-title>● 按<span value-highlight-xl>跃迁类型</span>概览</p-title>
			<p-gathers>
				<p-gather v-for="analysis of A.typesPoolGacha.filter(a => $optionShowNewbiePool ? true : a.id != 2)" :key="`gather-type-${analysis.id}`">
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
				<p-gather v-for="analysis of A.typesPoolGacha.filter(a => $optionShowNewbiePool ? true : a.id != 2)" :id="`pool-detail-${analysis.id}`" :key="`gather-pool-detail-${analysis.id}`"
					:main="brop($optionShowNewbiePool && analysis.id > 10)"
				>
					<PoolTitle :analysis="analysis" :shown-character-rarity4="$shownCharacterRarity4" :shown-lightcone-rarity4="$shownLightconeRarity4" />

					<p-gachas v-if="$optionShowDetail">
						<GachaItem v-if="analysis.countInvestNext" type="count-invest-next" :type-gacha="analysis.id" :count-invest="analysis.countInvestNext" />
						<GachaItem v-for="log of analysis.logsRare" :key="`gather-pool-detail-${analysis.id}-${log.id}`" :log="log" />
						<GachaItem v-if="analysis.countInvestPrev" type="count-invest-prev" :type-gacha="analysis.id" :count-invest="analysis.countInvestPrev" />
					</p-gachas>
				</p-gather>
			</p-gathers>
		</p-box>

		<p-box gacha-pool-detail>
			<p-title>● 按<span value-highlight-xl>跃迁活动</span></p-title>
			<p-gathers>
				<p-gather v-for="analysis of A.pools.filter(a => $optionShowNewbiePool ? true : a.pool.type != 2)" :id="`pool-detail-${analysis.id}`" :key="`gather-pool-detail-${analysis.id}`"
					:main="brop(analysis.pool.type > 10)"
				>
					<PoolTitle :analysis="analysis" :shown-character-rarity4="$shownCharacterRarity4" :shown-lightcone-rarity4="$shownLightconeRarity4" />

					<template v-if="$optionShowMatePool && analysis.poolsSub.length > 1">
						<PoolTitle v-for="analysisSub of analysis.poolsSub" :key="`gather-pool-sub-detail-${analysis.id}-${analysisSub.id}`"
							display="sub"
							:analysis="analysisSub"
							:shown-character-rarity4="$shownCharacterRarity4"
							:shown-lightcone-rarity4="$shownLightconeRarity4"
						/>
					</template>

					<p-gachas v-if="$optionShowDetail">
						<GachaItem v-if="analysis.countInvestNext" type="count-invest-next" :type-gacha="analysis.pool.type" :count-invest="analysis.countInvestNext" />
						<GachaItem v-for="log of analysis.logsRare" :key="`gather-pool-detail-${analysis.id}-${log.id}`" :log="log" />
						<GachaItem v-if="analysis.countInvestPrev" type="count-invest-prev" :type-gacha="analysis.pool.type" :count-invest="analysis.countInvestPrev" />
					</p-gachas>
				</p-gather>
			</p-gathers>
		</p-box>
	</p-main-box>
</template>

<script setup>
	import { computed, onMounted, ref } from 'vue';

	import { tabAdmin } from '@nuogz/vue-sidebar';
	import { Click, Combo, Texter } from '@nuogz/vue-components';
	import { $fail } from '@nuogz/vue-alert';

	import M from '../lib/meta.js';

	import analyseGacha from './analyseGacha.js';
	import loadProfiles from '../profile/load-profiles.js';

	import GachaItem from './comp/gacha-item.vue';
	import PoolTitle from './comp/pool-title.vue';



	const now = ref(null);
	onMounted(() => tabAdmin.emitChanged('mounted'));
	tabAdmin.addTabHandle('gacha-analysis', now, tab => {
		const [uid] = tab.params;
		if(!uid) { return; }

		query($uid.value = uid);
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


	const optionsShownHidden = [
		{ value: true, text: '显示' },
		{ value: false, text: '隐藏' },
	];
	const $optionShowDetail = ref(true);
	const $optionShowMatePool = ref(true);
	const $optionShowNewbiePool = ref(true);



	/** @type {import('vue').Ref<import('../../lib/fetch-log.js').ParsedLog[]>} */
	const $logs = ref([]);

	const $countLightcone5 = computed(() => $logs.value.filter(log => M.lightcones$id[log.item]?.rarity == 5).length);
	const $countCharacter5 = computed(() => $logs.value.filter(log => M.characters$id[log.item]?.rarity == 5).length);
	const $countLightcone4 = computed(() => $logs.value.filter(log => M.lightcones$id[log.item]?.rarity == 4).length);
	const $countCharacter4 = computed(() => $logs.value.filter(log => M.characters$id[log.item]?.rarity == 4).length);


	const $uid = ref(localStorage.getItem('last-analysis-uid') ?? '');
	const query = async () => {
		const uid = $uid.value;

		try {
			const logs = loadProfiles().find(profile => profile.uid == uid)?.logsParsed;

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
	@apply block p-4 leading-8 fixed h-16 z-50 shadow-mdd bg-[var(--cBack)] overflow-hidden
	width: calc( 100% - var(--widthSidebar))
	&:hover
		@apply h-auto
	>[item]
		@apply inblock w-auto mr-4 h-8 leading-8 mb-2

p-main-box
	@apply grid grid-cols-2 gap-2
	@apply relative mx-auto p-4 w-full leading-8 top-16

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
			@apply grid gap-2
			grid-template-columns: repeat(4, min-content)

			p-gather
				@apply inblock p-4 min-w-[10rem] border border-[var(--cBorderBack)] rounded-sm overflow-hidden
				p-title
					@apply text-lg font-bold mb-2
				p-info
					@apply block mb-0 mt-2 text-right

	p-box[gacha-type-detail]
		@apply grid grid-cols-1 gap-2 col-span-2
		p-gathers
			@apply grid grid-cols-3 gap-2
			grid-template-rows: 1fr auto
			p-gather
				@apply border border-[var(--cBorderBack)] rounded-sm overflow-hidden
				&[main]
					@apply row-span-2
				p-pool-title
					@apply mb-1
				p-gachas
					@apply block p-4
					:deep(p-gacha-item)
						@apply mb-1

	p-box[gacha-pool-detail]
		@apply grid grid-cols-1 gap-2 col-span-2
		p-gathers
			@apply grid grid-cols-2 gap-2
			p-gather
				@apply border border-[var(--cBorderBack)] rounded-sm overflow-hidden
				&:not([main])
					@apply col-span-2
				p-pool-title
					@apply mb-1
					&[sub]
						@apply ml-8
				p-gachas
					@apply block p-4
					:deep(p-gacha-item)
						@apply mb-1
</style>
