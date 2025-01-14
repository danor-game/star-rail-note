<template>
	<!-- 侧边栏 -->
	<Sidebar />


	<!-- 主模块 -->
	<p-main>
		<keep-alive>
			<component :is="moduleNow" :key="`module-${moduleNow}`" />
		</keep-alive>
	</p-main>
</template>

<script setup>
import { onMounted } from 'vue';


import { Sidebar, moduleNow } from '@nuogz/vue-sidebar';


import './index.pcss';
import './index.sass';
import updateSidebar from './lib/update-sidebar.js';



document.title = 'DR星铁笔记';


onMounted(updateSidebar);
</script>

<style lang="sass" scoped>
p-main
	margin-top: var(--heightTopbar, 0rem)
	margin-left: var(--widthSidebar, 8rem)
	width: calc(100% - var(--widthSidebar, 8rem))
	@apply block relative

	module
		@apply block relative
</style>

<style lang="sass">
.tippy-box[data-theme~='light-border']
	@apply shadow-mdd px-2 whitespace-pre text-left text-[var(--cTextMain)] bg-[var(--cMain)] #{!important}
</style>
