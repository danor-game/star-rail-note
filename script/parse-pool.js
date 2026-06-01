import { readFileSync } from 'fs';
import { dirname, resolve as resolvePath } from 'path';
import { fileURLToPath } from 'url';

import { writeJSONSync } from 'fs-extra/esm';

import { parse as parseJSON } from '@nuogz/json-bigint';



const dir = dirname(fileURLToPath(import.meta.url));
const { dirDataRaw } = parseJSON(readFileSync(resolvePath(dir, './config.local.json'), 'utf-8'));

const texts$hash = parseJSON(readFileSync(resolvePath(dirDataRaw, 'TextMap/TextMapCHS.json'), 'utf-8'));

const poolsRaw = parseJSON(readFileSync(resolvePath(dirDataRaw, 'ExcelOutput/GachaBasicInfo.json'), 'utf-8'));

const pools = parseJSON(readFileSync(resolvePath(dir, '../meta/meta.poolGacha.json'), 'utf-8'));
const types = parseJSON(readFileSync(resolvePath(dir, '../meta/meta.typeGacha.json'), 'utf-8'));

const idsPoolSkip = [2001, 3001, 2002, 3002];

for(const raw of poolsRaw) {
	if(idsPoolSkip.includes(raw.GachaID)) { continue; }


	const typePool = types.find(type => type.idType == raw.GachaType);

	const poolOld = pools.find(pool => pool.id == raw.GachaID);
	const poolNew = poolOld || {};
	const isNew = poolOld !== poolNew;


	poolNew.id = String(raw.GachaID);
	poolNew.type = typePool.id;
	poolNew.timeBorn = isNew ? 0 : poolOld.timeBorn;
	poolNew.timeDead = isNew ? 0 : poolOld.timeDead;
	poolNew.typeItem = typePool.idType.toLowerCase().includes('avatar') ? 'character' : typePool.idType.toLowerCase().includes('weapon') ? 'lightcone' : undefined;
	poolNew.itemsBoost5 = isNew ? [''] : poolOld.itemsBoost5;
	poolNew.itemsBoost4 = isNew ? ['', '', ''] : poolOld.itemsBoost4;
	poolNew.versionAdded = isNew ? process.argv[2] ?? '4.x' : poolOld.versionAdded;
	poolNew.rerun = isNew ? 0 : poolOld.rerun;
	poolNew.idLeader = isNew ? '' : poolOld.idLeader ? String(poolOld.idLeader) : undefined;
	poolNew.$data$locale = {
		'zh-cn': {
			name: texts$hash[raw.PoolName?.Hash]?.split('•')[0].trim() ?? poolOld?.$data$locale?.['zh-cn']?.name ?? `未知标题<${raw.PoolName?.Hash}>`,
		}
	};

	if(isNew) { pools.splice(pools.length - 2, 0, poolNew); }
}



writeJSONSync(resolvePath(dir, '../meta/meta.poolGacha.json'), pools, { EOL: '\n', spaces: '\t' });
