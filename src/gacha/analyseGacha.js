import Day from '../lib/day.pure.js';

import M from '../lib/meta.js';



/**
 * @typedef {Object} AnalysisByGachaType
 * @property {string} id
 * @property {number} order
 * @property {string} name
 * @property {import('../../lib/fetch-log.js').ParsedLog[]} logs
 * @property {import('../../lib/fetch-log.js').ParsedLog[]} logs5
 * @property {import('../../lib/fetch-log.js').ParsedLog[]} logs4
 * @property {import('../../lib/fetch-log.js').ParsedLog[]} logsRare
 * @property {number} countInvestNext
 * @property {number} countInvestPrev
 */

/**
 * @typedef {Object} AnalysisByGachaPool
 * @property {string} id
 * @property {number} order
 * @property {string} name
 * @property {import('../lib/meta.js').GachaPool} pool
 * @property {import('../../lib/fetch-log.js').ParsedLog[]} logs
 * @property {import('../../lib/fetch-log.js').ParsedLog[]} logs5
 * @property {import('../../lib/fetch-log.js').ParsedLog[]} logs4
 * @property {import('../../lib/fetch-log.js').ParsedLog[]} logsRare
 * @property {number} countInvestNext
 * @property {number} countInvestPrev
 */

/**
 * @typedef {Object} Analysis
 * @property {Object<string,AnalysisByGachaType>} typesGacha
 * @property {Object<string,AnalysisByGachaPool>} pools
 */


/**
 * @param {import('../../lib/fetch-log.js').ParsedLog[]} logs
 * @param {boolean} showCharacter4
 * @param {boolean} showLightcone4
 */
const analyseGacha = (logs, showCharacter4, showLightcone4) => {
	/** @type {Analysis} */
	const A = {};


	A.typesGacha = {};
	const countsInvest$typeGacha2 = M.typesGacha.reduce((acc, cur) => (acc[cur.id] = 0, acc), {});

	for(const idTypeGacha in M.typesGacha$id) {
		const typeGacha = M.typesGacha$id[idTypeGacha];

		const logsTypeGacha = logs.filter(log => log.type == idTypeGacha).sort((a, b) => b.time - a.time);

		const countInvestPrev = countsInvest$typeGacha2[idTypeGacha];
		let countInvestPrevNow = countsInvest$typeGacha2[idTypeGacha];

		for(const log of [...logsTypeGacha].reverse()) {
			countsInvest$typeGacha2[idTypeGacha]++;

			if(M.items$id[log.item]?.rarity == 5) {
				log.countInvest = countsInvest$typeGacha2[idTypeGacha];
				countsInvest$typeGacha2[idTypeGacha] = 0;


				if(countInvestPrev) { log.countInvestPrev = countInvestPrevNow; countInvestPrevNow = 0; }
			}
		}

		A.typesGacha[idTypeGacha] = {
			id: idTypeGacha,
			order: typeGacha.order,
			name: typeGacha.name,
			logs: logsTypeGacha,
			logs5: logsTypeGacha.filter(log => M.items$id[log.item]?.rarity == 5),
			logs4: logsTypeGacha.filter(log => M.items$id[log.item]?.rarity == 4),
			logsRare: logsTypeGacha.filter(log =>
				M.characters$id[log.item]?.rarity >= (showCharacter4 ? 4 : 5) ||
				M.lightcones$id[log.item]?.rarity >= (showLightcone4 ? 4 : 5)
			),
			countInvestPrev: countInvestPrev,
			countInvestNext: countsInvest$typeGacha2[idTypeGacha],
		};
	}


	A.pools = {};
	const countsInvest$typeGacha = M.typesGacha.reduce((acc, cur) => (acc[cur.id] = 0, acc), {});

	for(const idPool in M.poolsGacha$id) {
		const pool = M.poolsGacha$id[idPool];
		const poolLast = M.poolsGacha.filter(p => p.type == pool.type && p.timeEnd < pool.timeEnd).sort((a, b) => b.timeEnd - a.timeEnd)[0];

		const typeGachaPool = M.typesGacha$id[pool.type];

		const logsPool = logs
			.filter(log =>
				log.type == typeGachaPool.id &&
				log.pool == idPool &&
				(!pool.timeEnd ? true :
					Day.unix(log.time).isBetween(Day.unix(poolLast?.timeEnd ?? 0), Day.unix(pool.timeEnd), null, '[]')
				)
			)
			.sort((a, b) => b.time - a.time);


		const countInvestPrev = countsInvest$typeGacha[pool.type];
		let countInvestPrevNow = countsInvest$typeGacha[pool.type];

		for(const log of [...logsPool].reverse()) {
			countsInvest$typeGacha[pool.type]++;

			if(M.items$id[log.item]?.rarity == 5) {
				log.countInvest = countsInvest$typeGacha[pool.type];
				countsInvest$typeGacha[pool.type] = 0;


				if(countInvestPrev) { log.countInvestPrev = countInvestPrevNow; countInvestPrevNow = 0; }

				if(pool.itemsBoost5 && !pool.itemsBoost5.includes(log.item)) {
					log.missed = true;
				}
			}
		}

		A.pools[idPool] = {
			id: idPool,
			order: M.poolsGacha.findIndex(pool => pool.id == idPool),
			name: pool.name,
			pool,
			logs: logsPool,
			logs5: logsPool.filter(log => M.items$id[log.item]?.rarity == 5),
			logs4: logsPool.filter(log => M.items$id[log.item]?.rarity == 4),
			logsRare: logsPool.filter(log =>
				M.characters$id[log.item]?.rarity >= (showCharacter4 ? 4 : 5) ||
				M.lightcones$id[log.item]?.rarity >= (showLightcone4 ? 4 : 5)
			),
			countInvestPrev: countInvestPrev,
			countInvestNext: countsInvest$typeGacha[pool.type],
		};
	}



	return A;
};



export default analyseGacha;
