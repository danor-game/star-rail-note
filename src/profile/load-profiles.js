import { $fail } from '@nuogz/vue-alert';

import Day from '../lib/day.pure.js';

import saveProfiles from './save-profiles.js';



const loadProfiles = () => {
	let profiles;

	const textProfile = localStorage.getItem('profiles');

	if(textProfile !== null) {
		try {
			profiles = JSON.parse(textProfile);

			if(!(profiles instanceof Array)) { throw Error('数据类型不是数组'); }
		}
		catch(error) {
			const keyBackup = `profiles-${Day().format('YYMMDDHHmmss')}`;


			localStorage.setItem(`profiles-bad-${keyBackup}`, textProfile);
			saveProfiles();


			$fail(`读取档案`, `${error}\n● 数据已重置\n● 旧数据已备份到localStorage.profiles-bad-${keyBackup}`);
		}
	}

	return profiles ?? [];
};



export default loadProfiles;
