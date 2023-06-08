import { C } from '@nuogz/pangu';

import { M } from './meta.js';




/** @param {string} uid */
const showURL = async (uid) => {
	globalThis.console.log('uid', uid);


	const profile = C.profile.find(profile => profile.uid == uid);
	if(!profile) { throw Error(`找不到UID为${uid}的档案`); }


	const urlBase = new URL(M.api.urlGachaLog);

	urlBase.searchParams.set('authkey_ver', profile.versionKeyAuth);
	urlBase.searchParams.set('authkey', decodeURIComponent(profile.keyAuth));
	urlBase.searchParams.set('lang', profile.lang ?? M.api.lang);
	urlBase.searchParams.set('game_biz', profile.bizGame ?? M.api.bizGame);


	globalThis.console.log(urlBase.toString());
};



export default showURL;
