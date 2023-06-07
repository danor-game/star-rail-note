import { existsSync, writeFileSync } from 'fs';
import { resolve } from 'path';

import Axios from 'axios';
import { readJSONSync } from 'fs-extra/esm';

import { C, Day } from '@nuogz/pangu';

import { M, ML } from './meta.js';
import parseRawLog, { hourToTimezone } from './parse-raw-log.js';



/**
 * @typedef {Object} RawLog
 * @property {string} uid "XXXXXXXXX"should be 9-digits
 * @property {string} gacha_id "1001"
 * @property {string} gacha_type "1"
 * @property {string} item_id "20008"
 * @property {string} count "1"
 * @property {string} time "YYYY-MM-DD HH:mm:ss"
 * @property {string} name "希儿"
 * @property {string} lang "zh-cn"
 * @property {string} item_type "角色", "光锥"
 * @property {string} rank_type "5"
 * @property {string} id "XXXXXXXXXXXXXXXXXXX" should be 19-digits
 */

/**
 * @typedef {Object} ParsedLog
 * @property {string} id "XXXXXXXXXXXXXXXXXXX" should be 19-digits
 * @property {string} item "2008"
 * @property {string} pool "1001"
 * @property {string} type "1"
 * @property {number} time timpstamp
 */



/** @param {string} uid */
const fetchLog = async (uid) => {
	globalThis.console.log('uid', uid);


	const profile = C.profile.find(profile => profile.uid == uid);
	if(!profile) { throw Error(`找不到UID为${uid}的档案`); }


	const urlBase = new URL(M.api.urlGachaLog);

	urlBase.searchParams.set('authkey_ver', profile.versionKeyAuth);
	urlBase.searchParams.set('authkey', decodeURIComponent(profile.keyAuth));
	urlBase.searchParams.set('lang', profile.lang ?? M.api.lang);
	urlBase.searchParams.set('game_biz', profile.bizGame ?? M.api.bizGame);
	urlBase.searchParams.set('size', 20);



	const fileLogsParsed = resolve(C.dir.data, `${uid}-parsed.json`);

	/** @type {ParsedLog[]} */
	const logsParsed = existsSync(fileLogsParsed)
		? readJSONSync(fileLogsParsed) : [];


	/** @type {RawLog[]} */
	const logsRaw = [];


	for(const typeGacha in M.typeGacha) {
		const { name: nameTypeGacha } = ML.typeGacha[typeGacha];


		let idEnd = '0';
		for(let page = 0; ; page++) {
			const url = new URL(urlBase);

			url.searchParams.set('gacha_type', typeGacha);
			url.searchParams.set('end_id', idEnd);


			const { data } = await Axios.get(url, { responseType: 'json' });
			/** @type {RawLog[]} */
			const logsPage = data?.data?.list ?? [];
			const timezone = data?.data?.region_time_zone;


			globalThis.console.log(`抓取${nameTypeGacha}`, `第${page + 1}页`, `${logsPage?.length ?? 0}条记录`);


			if(!logsPage?.length) { break; }


			const idEndScope = idEnd = logsPage?.[logsPage?.length - 1]?.id;

			let overlaped = false;
			if(logsParsed.find(logParsed => logParsed.id == idEndScope)) { overlaped = true; }


			logsRaw.push(...logsPage);


			logsParsed.push(
				...logsPage
					.filter(logRaw => {
						const logParsed = logsParsed.find(logParsed => logParsed.id == logRaw.id);

						if(!logParsed) { return true; }

						if(
							logParsed.item != logRaw.item_id ||
							logParsed.pool != logRaw.gacha_id ||
							logParsed.type != logRaw.gacha_type ||
							logParsed.time != Day(`${logRaw.time} ${hourToTimezone(timezone)}`, 'YYYY-MM-DD HH:mm:ss Z').unix()
						) {
							globalThis.console.warn(`抽卡记录ID[${logParsed.id}]相同，数据不相同`);

							return true;
						}

						return false;
					})
					.map(log => parseRawLog(log, timezone))
			);


			if(overlaped) { break; }


			await new Promise(resolve => setTimeout(resolve, 1000));
		}
	}

	logsRaw.sort((a, b) => Day(b.time, 'YYYY-MM-DD HH:mm:ss').unix() - Day(a.time, 'YYYY-MM-DD HH:mm:ss').unix());
	logsParsed.sort((a, b) => b.time - a.time);

	writeFileSync(resolve(C.dir.data, `${uid}-raw-${Day().format('YY-MM-DD HH-mm-ss')}.json`), JSON.stringify(logsRaw, null, '\t'));
	writeFileSync(resolve(C.dir.data, `${uid}-parsed.json`), JSON.stringify(logsParsed, null, '\t'));
};



export default fetchLog;
