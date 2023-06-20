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
	@apply ring-[#E9B577] #{!important}

:deep(comp-click)
	@apply text-[var(--colorText)]
</style>
<style lang="sass">
.tippy-box[data-theme~='light-border']
	@apply shadow-mdd px-2 bg-[var(--colorMain)] #{!important}
</style>


<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>


<style lang="sass">
html
	--colorMain: #D99A4C
	--colorMainDark: #C8812A
	--colorMainLight: #E2B276
	--colorBackground: theme("colors.gray.700")
	--colorBackgroundLight: theme("colors.gray.600")
	--colorText: theme("colors.gray.100")
	--colorTextMain: theme("colors.gray.700")
	--colorDisable: theme("colors.gray.500")
	--colorOkay: theme("colors.green.500")
	--colorFail: theme("colors.red.500")
	--cAccentSelected: theme("colors.blue.200")
	--cAccentHover: theme("colors.green.200")
	--cLightD: theme("colors.gray.200")

html
	@apply h-full overflow-x-hidden overflow-y-auto
	color: var(--colorText)
	background: var(--colorBackground)
	font-family: 'Source Code Pro'


// body
// 	@apply bg-gray-500 sm:bg-blue-400 md:bg-red-400 lg:bg-green-500 xl:bg-yellow-500

input
	color: var(--colorText)

/** Scrollbar Style **/
*
	scrollbar-width: thin
	scrollbar-color: rgba(119, 119, 119, 0.3) rgba(119, 119, 119, 0.1)

::-webkit-scrollbar
	width: var(--widthScroll)
	height: var(--widthScroll)

::-webkit-scrollbar-track:hover
	background-color: rgba(119, 119, 119, 0.1)

::-webkit-scrollbar-thumb
	border-radius: var(--widthScroll)
	background: rgba(119, 119, 119, 0.3)

::-webkit-scrollbar-thumb:hover
	background: rgba(119, 119, 119, 0.4)

::-webkit-scrollbar-thumb:active
	background: rgba(119, 119, 119, 1)

::-webkit-scrollbar-corner
	background-color: transparent


.transAll, .transAll *, .trans
	transition-property: all
	transition-duration: 0.4s

	-webkit-transform: translateZ(0)
	-moz-transform: translateZ(0)
	-ms-transform: translateZ(0)
	-o-transform: translateZ(0)
	transform: translateZ(0)

	&._d02
		transition-duration: 0.2s
	&._d07
		transition-duration: 0.7s
	&._d2
		transition-duration: 2s

comp-alert p-body-content
	@apply whitespace-pre
</style>
