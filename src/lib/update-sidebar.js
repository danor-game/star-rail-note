import { faBook, faStarOfDavid, faTrophy } from '@fortawesome/free-solid-svg-icons';

import { tabAdmin } from '@nuogz/vue-sidebar';

import { PA } from '../profile/admin.js';



export default function updateSidebar(isFirst = true) {
	const idProfileLast = localStorage.getItem('last-profile-id');

	if(isFirst) {
		tabAdmin.add('database-character-grid', { type: 'icon|title', title: '角色归属', icon: faBook, delay: true });
		tabAdmin.add('profile-manager', { type: 'icon|title', title: '档案管理', icon: faBook, delay: Boolean(idProfileLast && PA.$profiles.value.length) });
	}
	else {
		for(const tab of tabAdmin.list) {
			if(tab.module == 'achievement-manager' || tab.module == 'gacha-analysis') {
				tabAdmin.del(tab);
			}
		}
	}

	for(const profile of PA.profiles) {
		tabAdmin.add('achievement-manager', { type: 'icon|title', title: '成就管理', icon: faTrophy, delay: !isFirst || profile.id != idProfileLast, group: { id: profile.id, text: profile.nick ?? profile.name } }, profile.id);
		tabAdmin.add('gacha-analysis', { type: 'icon|title', title: '跃迁分析', icon: faStarOfDavid, delay: !isFirst || profile.id != idProfileLast, group: { id: profile.id, text: profile.nick ?? profile.name } }, profile.id);
	}
}
