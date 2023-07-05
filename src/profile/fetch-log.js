import Day from '../lib/day.pure.js';
import M from '../lib/meta.js';

import fetchText from './fetch-text.js';
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


const fetchLog = async (profile, willFetchFull = false, textProgressRef) => {
	const urlBase = new URL(M.api.urlGachaLog);

	urlBase.searchParams.set('authkey_ver', profile.versionKeyAuth);
	urlBase.searchParams.set('authkey', decodeURIComponent(profile.keyAuth));
	urlBase.searchParams.set('lang', profile.lang ?? M.api.lang);
	urlBase.searchParams.set('game_biz', profile.bizGame ?? M.api.bizGame);
	urlBase.searchParams.set('size', 20);



	/** @type {ParsedLog[]} */
	const logsParsed = willFetchFull ? [] : profile.logsParsed;


	/** @type {RawLog[]} */
	const logsRaw = [];

	for(const typeGacha in M.typesGacha$id) {
		const { name: nameTypeGacha } = M.typesGacha$id[typeGacha];


		let idEnd = '0';
		for(let page = 0; ; page++) {
			const url = new URL(urlBase);

			url.searchParams.set('gacha_type', typeGacha);
			url.searchParams.set('end_id', idEnd);


			const data = JSON.parse(await fetchText(url));

			if(data.retcode == -101) { throw Error('链接已过期'); }
			if(data.retcode) { throw Error(data.message); }

			/** @type {RawLog[]} */
			const logsPage = data?.data?.list ?? [];
			const timezone = data?.data?.region_time_zone;


			textProgressRef.value = `正在获取${nameTypeGacha}记录：第${page + 1}页，发现${logsPage?.length ?? 0}条记录`;


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


	profile.logsParsed = logsParsed;


	const timeFetch = Day();
	if(!profile.timeFetchFirst) { profile.timeFetchFirst = timeFetch.format(); }
	profile.timeFetchLast = timeFetch.format();


	return { logsRaw, logsParsed };
};



export default fetchLog;
