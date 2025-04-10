import { readFileSync } from 'fs';
import { dirname, resolve as resolvePath } from 'path';
import { fileURLToPath } from 'url';

import { writeJSONSync } from 'fs-extra/esm';

import { parse as parseJSON } from '@nuogz/json-bigint';



const dir = dirname(fileURLToPath(import.meta.url));
const { dirDataRaw } = parseJSON(readFileSync(resolvePath(dir, './config.local.json'), 'utf-8'));

const texts$hash = parseJSON(readFileSync(resolvePath(dirDataRaw, 'TextMap/TextMapCHS.json'), 'utf-8'));

const servantsRaw = parseJSON(readFileSync(resolvePath(dirDataRaw, 'ExcelOutput/AvatarServantConfig.json'), 'utf-8'));

const servants = parseJSON(readFileSync(resolvePath(dir, '../meta/meta.path.json'), 'utf-8'));


const result = [];
for(const raw of servantsRaw) {
	if(!raw.ServantID) { continue; }

	const servant = {
		id: String(raw.ServantID),
		versionAdded: servants.find(meta => meta.id == raw.ServantID)?.versionAdded ?? process.argv[2] ?? '3.x',
		$data$locale: {
			'zh-cn': {
				name: texts$hash[raw.ServantName?.Hash],
			}
		}
	};

	result.push(servant);
}
result.sort((a, b) => a.id - b.id);



writeJSONSync(resolvePath(dir, '../meta/meta.servant.json'), result, { EOL: '\n', spaces: '\t' });
