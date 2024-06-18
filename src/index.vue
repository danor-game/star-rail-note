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
import { faBook, faStarOfDavid, faTrophy } from '@fortawesome/free-solid-svg-icons';

import { Sidebar, moduleNow, tabAdmin } from '@nuogz/vue-sidebar';

import { PA } from './profile/admin.js';

import './index.pcss';
import './index.sass';



document.title = 'DR星铁笔记';


onMounted(() => {
	const idProfileLast = localStorage.getItem('last-profile-id');

	tabAdmin.add('test-test', { type: 'icon|title', title: '测试', icon: faBook, delay: true });
	tabAdmin.add('database-character-grid', { type: 'icon|title', title: '角色归属', icon: faBook, delay: true });
	tabAdmin.add('profile-manager', { type: 'icon|title', title: '档案管理', icon: faBook, delay: Boolean(idProfileLast && PA.$profiles.value.length) });

	for(const profile of PA.profiles) {
		tabAdmin.add('achievement-manager', { type: 'icon|title', title: '成就管理', icon: faTrophy, delay: profile.id != idProfileLast, group: { id: profile.id, text: profile.nick ?? profile.name } }, profile.id);
		tabAdmin.add('gacha-analysis', { type: 'icon|title', title: '跃迁分析', icon: faStarOfDavid, delay: profile.id != idProfileLast, group: { id: profile.id, text: profile.nick ?? profile.name } }, profile.id);
	}
});
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
