import { dirname, resolve as resolvePath } from 'path';
import { fileURLToPath } from 'url';

import { readJSONSync, writeJSONSync } from 'fs-extra/esm';



const dir = dirname(fileURLToPath(import.meta.url));

const poolsGacha = readJSONSync(resolvePath(dir, '../meta/meta.poolGacha.json'));

const poolsSample = poolsGacha.slice(poolsGacha.length - 4, poolsGacha.length - 2);

const namesPoolPreset = {
	2: {
		11: ['', '', ''],
		12: ['', '流光定影', '溯回忆象'],
	},
	4: {
		11: ['', '', '铭心之萃', '铭心之萃', '铭心之萃'],
		12: ['', '流光定影', '真意之汇', '真意之汇', '真意之汇'],
	}
};

const countPairPoolMax = Number(process.argv[3]) || 2;
for(let countPairPool = 1; countPairPool <= countPairPoolMax; countPairPool++) {
	for(const poolSample of poolsSample) {
		const pool = {};

		pool.id = String(Number(poolSample.id) + countPairPool);
		pool.type = poolSample.type;

		if('timeBorn' in poolSample == false) { pool.timeBorn = 0; }
		pool.timeDead = 0;

		pool.typeItem = poolSample.typeItem;

		pool.itemsBoost5 = [''];
		pool.itemsBoost4 = ['', '', ''];
		pool.versionAdded = String((Number(poolSample.versionAdded) + 0.1).toFixed(1)) ?? process.argv[2] ?? '3.x';

		if(countPairPool > 1) {
			pool.rerun = 1;
			pool.idLeader = String(Number(poolSample.id) + 1);
		}

		pool.$data$locale = {
			'zh-cn': {
				name: namesPoolPreset[countPairPoolMax]?.[pool.type]?.[countPairPool] ?? ''
			}
		};

		poolsGacha.splice(poolsGacha.length - 2, 0, pool);
	}
}


writeJSONSync(resolvePath(dir, '../meta/meta.poolGacha.json'), poolsGacha, { EOL: '\n', spaces: '\t' });
