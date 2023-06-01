import { C, Day } from '@nuogz/pangu';
import Axios from 'axios';
import { writeFileSync } from 'fs';
import { resolve } from 'path';


const typeGacha$name = {
	2: '新手跃迁',
	1: '常驻跃迁',
	11: '角色活动跃迁',
	12: '光锥活动跃迁',
};


const fetchLog = async (uid) => {
	globalThis.console.log('uid', uid);


	const profile = C.profile.find(profile => profile.uid == uid);
	if(!profile) { throw Error(`找不到UID为${uid}的档案`); }


	const urlBase = new URL(C.meta.urlGachaLog);

	urlBase.searchParams.set('authkey_ver', profile.versionKeyAuth);
	urlBase.searchParams.set('authkey', decodeURIComponent(profile.keyAuth));
	urlBase.searchParams.set('lang', profile.lang ?? C.meta.lang);
	urlBase.searchParams.set('game_biz', profile.bizGame ?? C.meta.bizGame);
	urlBase.searchParams.set('size', 20);


	/** @type {Object<string, Array>} */
	const logs$typeGacha = Object.keys(typeGacha$name).reduce((acc, cur) => (acc[cur] = [], acc), {});

	for(const typeGacha in typeGacha$name) {
		const name = typeGacha$name[typeGacha];
		const logsType = logs$typeGacha[typeGacha];

		let logsPage = [];
		let idEnd = '0';
		for(let page = 0; logsPage.length || !page; page++) {
			const url = new URL(urlBase);

			url.searchParams.set('gacha_type', typeGacha);
			url.searchParams.set('end_id', idEnd);

			({ data: { data: { list: logsPage } } = { data: { list: [] } } } =
				await Axios.get(url, { responseType: 'json' }));


			idEnd = logsPage?.[logsPage?.length - 1]?.id;

			logsType.push(...logsPage);

			globalThis.console.log(`抓取${name}`, `第${page + 1}页`, idEnd);

			await new Promise(resolve => setTimeout(resolve, 1000 * 2));
		}
	}

	writeFileSync(resolve(C.dir.data, `${uid}-${Day().format('YY-MM-DD HH-mm-ss')}.json`), JSON.stringify(logs$typeGacha, null, '\t'));
};



export default fetchLog;
