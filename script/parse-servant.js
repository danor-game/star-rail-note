import { dirname, resolve as resolvePath } from 'path';
import { fileURLToPath } from 'url';

import { readJSONSync, writeJSONSync } from 'fs-extra/esm';



const dir = dirname(fileURLToPath(import.meta.url));
const { dirDataRaw } = readJSONSync(resolvePath(dir, './config.local.json'));

const servants = readJSONSync(resolvePath(dir, '../meta/meta.path.json'));

const servantsRaw = readJSONSync(resolvePath(dirDataRaw, 'ExcelOutput/AvatarServantConfig.json'));
const texts$hash = readJSONSync(resolvePath(dirDataRaw, 'TextMap/TextMapCHS.json'));


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
