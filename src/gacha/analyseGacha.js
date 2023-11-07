import M from '../lib/meta.js';



/**
 * @typedef {Object} AnalysisByGachaType
 * @property {string} id
 * @property {number} order
 * @property {string} name
 * @property {import('../profile/fetch-log.js').ParsedLog[]} logs
 * @property {import('../profile/fetch-log.js').ParsedLog[]} logs5
 * @property {import('../profile/fetch-log.js').ParsedLog[]} logs4
 * @property {import('../profile/fetch-log.js').ParsedLog[]} logsRare
 * @property {number} countInvestNext
 * @property {number} countInvestPrev
 */

/**
 * @typedef {Object} AnalysisByGachaPool
 * @property {string} id
 * @property {number} order
 * @property {string} name
 * @property {import('../lib/meta.js').GachaPool} pool
 * @property {import('../profile/fetch-log.js').ParsedLog[]} logs
 * @property {import('../profile/fetch-log.js').ParsedLog[]} logs5
 * @property {import('../profile/fetch-log.js').ParsedLog[]} logs4
 * @property {import('../profile/fetch-log.js').ParsedLog[]} logsRare
 * @property {number} countInvestNext
 * @property {number} countInvestPrev
 */

/**
 * @typedef {Object} Analysis
 * @property {AnalysisByGachaType[]} typesGacha
 * @property {AnalysisByGachaPool[]} pools
 */


/**
 * @param {import('../profile/fetch-log.js').ParsedLog[]} logs
 * @param {boolean} showCharacter4
 * @param {boolean} showLightcone4
 */
const analyseGacha = (logs, showCharacter4, showLightcone4) => {
	/** @type {Analysis} */
	const A = {};


	A.typesGacha = [];
	const countsInvest$typeGacha2 = M.typesGacha.reduce((acc, cur) => (acc[cur.id] = 0, acc), {});

	for(const typeGacha of M.typesGacha) {
		const logsTypeGacha = logs.filter(log => log.type == typeGacha.id).sort((a, b) => b.time - a.time);

		const countInvestPrev = countsInvest$typeGacha2[typeGacha.id];
		let countInvestPrevNow = countsInvest$typeGacha2[typeGacha.id];

		for(const log of [...logsTypeGacha].reverse()) {
			countsInvest$typeGacha2[typeGacha.id]++;

			if(M.items$id[log.item]?.rarity == 5) {
				log.countInvest = countsInvest$typeGacha2[typeGacha.id];
				countsInvest$typeGacha2[typeGacha.id] = 0;


				if(countInvestPrev) { log.countInvestPrev = countInvestPrevNow; countInvestPrevNow = 0; }
			}
		}

		A.typesGacha.push({
			id: typeGacha.id,
			order: typeGacha.order,
			name: typeGacha.name,
			logs: logsTypeGacha,
			logs5: logsTypeGacha.filter(log => M.items$id[log.item]?.rarity == 5),
			logs4: logsTypeGacha.filter(log => M.items$id[log.item]?.rarity == 4),
			logsRare: logsTypeGacha.filter(log =>
				M.characters$id[log.item]?.rarity >= (showCharacter4 ? 4 : 5) ||
				M.lightcones$id[log.item]?.rarity >= (showLightcone4 ? 4 : 5)
			),
			countInvestNext: countsInvest$typeGacha2[typeGacha.id],
			countInvestPrev: countInvestPrev,
		});
	}


	A.pools = [];
	const countsInvest$typeGacha = M.typesGacha.reduce((acc, cur) => (acc[cur.id] = 0, acc), {});

	for(const pool of M.poolsGacha.filter(pool => !pool.idLeader).toReversed()) {
		const poolsMate = M.poolsGacha.filter(p => p.idLeader == pool.id);

		const poolsAll = [pool, ...poolsMate];
		const idsPoolAll = poolsAll.map(pool => pool.id);
		const itemsBoost5 = poolsAll.map(pool => pool.itemsBoost5 ?? []).flat();


		const logsPoolAll = logs
			.filter(log => idsPoolAll.includes(log.pool))
			.sort((a, b) => b.time - a.time);

		const countInvestPrev = countsInvest$typeGacha[pool.type];
		let countInvestPrevNow = countsInvest$typeGacha[pool.type];

		for(const log of logsPoolAll.toReversed()) {
			countsInvest$typeGacha[pool.type]++;

			if(M.items$id[log.item]?.rarity == 5) {
				log.countInvest = countsInvest$typeGacha[pool.type];
				countsInvest$typeGacha[pool.type] = 0;


				if(countInvestPrev) { log.countInvestPrev = countInvestPrevNow; countInvestPrevNow = 0; }

				if(itemsBoost5.length && !itemsBoost5.includes(log.item)) {
					log.missed = true;
				}
			}
		}

		A.pools.unshift({
			id: pool.id,
			name: pool.name,
			order: M.poolsGacha.findIndex(pool => pool.id == pool.id),
			pool,

			logs: logsPoolAll,
			logs5: logsPoolAll.filter(log => M.items$id[log.item]?.rarity == 5),
			logs4: logsPoolAll.filter(log => M.items$id[log.item]?.rarity == 4),
			logsRare: logsPoolAll.filter(log =>
				M.characters$id[log.item]?.rarity >= (showCharacter4 ? 4 : 5) ||
				M.lightcones$id[log.item]?.rarity >= (showLightcone4 ? 4 : 5)
			),

			countInvestNext: countsInvest$typeGacha[pool.type],
			countInvestPrev: countInvestPrev,

			poolsSub: poolsAll.map((poolMate, order) => {
				const logsPool = logs
					.filter(log => log.pool == poolMate.id)
					.sort((a, b) => b.time - a.time);

				return {
					id: poolMate.id,
					name: poolMate.name,
					order,
					pool: poolMate,
					logs: logsPool,
					logs5: logsPool.filter(log => M.items$id[log.item]?.rarity == 5),
					logs4: logsPool.filter(log => M.items$id[log.item]?.rarity == 4),
					logsRare: logsPool.filter(log =>
						M.characters$id[log.item]?.rarity >= (showCharacter4 ? 4 : 5) ||
						M.lightcones$id[log.item]?.rarity >= (showLightcone4 ? 4 : 5)
					),
				};
			}),
		});
	}

	return A;
};



export default analyseGacha;
