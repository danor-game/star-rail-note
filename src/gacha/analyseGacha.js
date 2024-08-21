import M from '../lib/meta.js';



/**
 * @typedef {Object} GachaTypeAnalysis
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
 * @typedef {Object} GachaPoolAnalysis
 * @property {string} id
 * @property {number} order
 * @property {string} name
 * @property {import('../lib/meta.js').GachaPool} pool
 * @property {string} typePool
 * @property {import('../profile/fetch-log.js').ParsedLog[]} logs
 * @property {import('../profile/fetch-log.js').ParsedLog[]} logs5
 * @property {import('../profile/fetch-log.js').ParsedLog[]} logs4
 * @property {import('../profile/fetch-log.js').ParsedLog[]} logsRare
 * @property {number} countInvestNext
 * @property {number} countInvestPrev
 */

/**
 * @typedef {Object} Analysis
 * @property {GachaTypeAnalysis[]} analysisesTypeGacha
 * @property {GachaPoolAnalysis[]} pools
 * @property {Object<string, number>} countsInvest$id
 * @property {Object<string, number>} countsInvestPrev$id
 * @property {Object<string, number>} misseds$id
 * @property {number} countLightcone5
 * @property {number} countCharacter5
 * @property {number} countLightcone4
 * @property {number} countCharacter4
 */


/**
 * @param {import('../profile/fetch-log.js').ParsedLog[]} logs
 * @param {boolean} showCharacter4
 * @param {boolean} showLightcone4
 */
const analyseGacha = (logs, showCharacter4, showLightcone4) => {
	/** @type {Analysis} */
	const A = {
		analysisesTypeGacha: [],
		pools: [],
		countsInvest$id: {},
		countsInvestPrev$id: {},
		misseds$id: {},
		countLightcone5: logs.filter(log => M.lightcones$id[log.item]?.rarity == 5).length,
		countCharacter5: logs.filter(log => M.characters$id[log.item]?.rarity == 5).length,
		countLightcone4: logs.filter(log => M.lightcones$id[log.item]?.rarity == 4).length,
		countCharacter4: logs.filter(log => M.characters$id[log.item]?.rarity == 4).length,
	};


	const countsInvestTypeGacha$typeGacha = M.typesPoolGacha.reduce((acc, cur) => (acc[cur.id] = 0, acc), {});

	for(const typeGacha of [{ id: '0', minimum5: 90, 'order': 0, name: '未知跃迁' }, ...M.typesPoolGacha.toReversed()]) {
		const logsTypeGacha = logs.filter(log => {
			if(typeGacha.id != '0') { return M.poolsGacha$id[log.pool]?.type == typeGacha.id; }

			return log.pool in M.poolsGacha$id == false;
		}).sort((a, b) => b.time - a.time);

		if(typeGacha.id == 0 && !logsTypeGacha.length) { continue; }


		const countInvestPrev = countsInvestTypeGacha$typeGacha[typeGacha.id];

		for(const log of logsTypeGacha.toReversed()) {
			countsInvestTypeGacha$typeGacha[typeGacha.id]++;

			if(M.items$id[log.item]?.rarity == 5) {
				countsInvestTypeGacha$typeGacha[typeGacha.id] = 0;
			}
		}

		A.analysisesTypeGacha.unshift({
			id: typeGacha.id,
			name: typeGacha.name,
			order: typeGacha.order,

			logs: logsTypeGacha,
			logs5: logsTypeGacha.filter(log => M.items$id[log.item]?.rarity == 5),
			logs4: logsTypeGacha.filter(log => M.items$id[log.item]?.rarity == 4),
			logsRare: logsTypeGacha.filter(log =>
				M.characters$id[log.item]?.rarity >= (showCharacter4 ? 4 : 5) ||
				M.lightcones$id[log.item]?.rarity >= (showLightcone4 ? 4 : 5)
			),

			countInvestNext: countsInvestTypeGacha$typeGacha[typeGacha.id],
			countInvestPrev: countInvestPrev,
		});
	}



	const countsInvestPool$typeGacha = M.typesPoolGacha.reduce((acc, cur) => (acc[cur.id] = 0, acc), {});

	for(const pool of M.poolsGacha.filter(pool => !pool.idLeader).toReversed()) {
		const poolsMate = M.poolsGacha.filter(p => p.idLeader == pool.id);

		const poolsAll = [pool, ...poolsMate];
		const idsPoolAll = !pool.unknown ? poolsAll.map(poolAll => poolAll.id) : M.poolsGacha.map(poolGacha => poolGacha.id);
		const itemsBoost5 = poolsAll.map(poolAll => poolAll.itemsBoost5 ?? []).flat();


		const logsPoolAll = !pool.unknown
			? logs
				.filter(log => idsPoolAll.includes(log.pool))
				.sort((a, b) => b.time - a.time)

			: logs
				.filter(log => !idsPoolAll.includes(log.pool) && log.pool.startsWith(pool.typeItem == 'character' ? '2' : '3'))
				.sort((a, b) => b.time - a.time);


		const countInvestPrev = countsInvestPool$typeGacha[pool.type];
		let countInvestPrevNow = countsInvestPool$typeGacha[pool.type];

		for(const log of logsPoolAll.toReversed()) {
			countsInvestPool$typeGacha[pool.type]++;

			if(M.items$id[log.item]?.rarity == 5) {
				A.countsInvest$id[log.id] = countsInvestPool$typeGacha[pool.type];
				countsInvestPool$typeGacha[pool.type] = 0;


				if(countInvestPrev) {
					A.countsInvestPrev$id[log.id] = countInvestPrevNow; countInvestPrevNow = 0;
				}

				if(itemsBoost5.length && !itemsBoost5.includes(log.item)) {
					A.misseds$id[log.id] = true;
				}
			}
		}

		A.pools.unshift({
			id: pool.id,
			name: pool.name,
			order: M.poolsGacha.findIndex(poolGacha => poolGacha.id == poolGacha.id),
			pool,
			typePool: pool.type,

			logs: logsPoolAll,
			logs5: logsPoolAll.filter(log => M.items$id[log.item]?.rarity == 5),
			logs4: logsPoolAll.filter(log => M.items$id[log.item]?.rarity == 4),
			logsRare: logsPoolAll.filter(log =>
				M.characters$id[log.item]?.rarity >= (showCharacter4 ? 4 : 5) ||
				M.lightcones$id[log.item]?.rarity >= (showLightcone4 ? 4 : 5)
			),

			countInvestNext: countsInvestPool$typeGacha[pool.type],
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
