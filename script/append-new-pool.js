import { dirname, resolve as resolvePath } from 'path';
import { fileURLToPath } from 'url';

import { readJSONSync, writeJSONSync } from 'fs-extra/esm';
import { copyJSON } from '@nuogz/utility';



const dir = dirname(fileURLToPath(import.meta.url));

const poolsGacha = readJSONSync(resolvePath(dir, '../meta/meta.poolGacha.json'));

const poolsNew = copyJSON(poolsGacha.slice(poolsGacha.length - 10, poolsGacha.length - 6));

for(const pool of poolsNew) {
	pool.id = String(Number(pool.id) + 4);
	if('timeBorn' in pool) { pool.timeBorn = 0; }
	pool.timeDead = 0;
	pool.itemsBoost5 = [''];
	pool.itemsBoost4 = ['', '', ''];
	pool.versionAdded = String((Number(pool.versionAdded) + 0.1).toFixed(1)) ?? process.argv[2] ?? '2.';
	if('idLeader' in pool) { pool.idLeader = String(Number(pool.idLeader) + 4); }
	pool.$data$locale = { 'zh-cn': { name: '' } };

	poolsGacha.splice(poolsGacha.length - 2, 0, pool);
}


writeJSONSync(resolvePath(dir, '../meta/meta.poolGacha.json'), poolsGacha, { EOL: '\n', spaces: '\t' });
