<template>
	<p-panel>
		<Texter v-model="$uid" item uid label="UID" type="number" align="center" />
		<Click item query text="查询" @click="query" />
	</p-panel>
	<p-gacha-box>
		<p-line>● <span value-highlight>{{ $logs.length }}</span> 次抽卡</p-line>
		<p-line>● <span value-highlight>{{ $countCharacter5 }}</span> 位五星角色，<span value-highlight>{{ $countCharacter4 }}</span> 位四星角色</p-line>
		<p-line>● <span value-highlight>{{ $countLightcone5 }}</span> 张五星光锥，<span value-highlight>{{ $countLightcone4 }}</span> 张四星光锥</p-line>
	</p-gacha-box>
</template>

<script setup>
	import { computed, onMounted, ref } from 'vue';
	import { Click, Texter } from '@nuogz/vue-components';
	import { $fail } from '@nuogz/vue-alert';

	import { M } from '../lib/meta.js';






	const $uid = ref('101691019');
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

	onMounted(query);
</script>


<style lang="sass">
p-panel
	@apply block p-4 leading-8

	>[item]
		@apply inblock mr-4 h-8 leading-8 mb-2

	>[uid]
		@apply w-48
	>[query]
		@apply w-16

p-gacha-box
	@apply block p-4 leading-8

	p-line
		@apply block w-full

	[value-highlight]
		@apply font-bold text-2xl text-[var(--colorMain)]
</style>
