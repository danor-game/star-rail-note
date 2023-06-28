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
	import { faStarOfDavid } from '@fortawesome/free-solid-svg-icons';

	import CV from '@nuogz/css-var';
	import { Sidebar, moduleNow, tabs } from '@nuogz/vue-sidebar';


	import './index.pcss';
	import './index.sass';


	document.title = 'DR跃迁笔记';


	CV.widthSidebar = '7rem';
	CV.heightTopbar = '0rem';
	CV.widthScroll = '0.5rem';


	onMounted(() => tabs.add('profile-manager', 'icon|title', { title: '档案管理', icon: faStarOfDavid }));
	onMounted(() => tabs.add('gacha-analysis', 'icon|title', { title: '跃迁分析', icon: faStarOfDavid }, 'delay'));
</script>

<style lang="sass" scoped>
p-main
	margin-top: var(--heightTopbar)
	margin-left: var(--widthSidebar)
	width: calc(100% - var(--widthSidebar))
	@apply block relative

	module
		@apply block relative
</style>

<style lang="sass" scoped>
comp-sidebar :deep(p-tab)
	@apply ring-[var(--colorMainLight)] #{!important}

:deep(comp-click)
	@apply text-[var(--colorText)]
</style>

<style lang="sass">
.tippy-box[data-theme~='light-border']
	@apply shadow-mdd px-2 bg-[var(--colorMain)] #{!important}
</style>
