import { dirname, resolve as resolvePath } from 'path';
import { fileURLToPath } from 'url';

import { readJSONSync, writeJSONSync } from 'fs-extra/esm';



const dir = dirname(fileURLToPath(import.meta.url));
const { dirDataRaw } = readJSONSync(resolvePath(dir, './config.local.json'));

const paths = readJSONSync(resolvePath(dir, '../meta/meta.path.json'));

const pathsRaw = readJSONSync(resolvePath(dirDataRaw, 'ExcelOutput/AvatarBaseType.json'));
const texts$hash = readJSONSync(resolvePath(dirDataRaw, 'TextMap/TextMapCHS.json'));


const result = [];
for(const raw of pathsRaw) {
	if(!raw.ID) { continue; }

	const path = {
		id: String(raw.ID),
		versionAdded: paths.find(meta => meta.id == raw.ID)?.versionAdded ?? process.argv[2] ?? '3.x',
		$data$locale: {
			'zh-cn': {
				name: texts$hash[raw.BaseTypeText?.Hash],
				description: texts$hash[raw.BaseTypeDesc?.Hash],
			}
		}
	};

	result.push(path);
}
result.sort((a, b) => a.id - b.id);



writeJSONSync(resolvePath(dir, '../meta/meta.path.json'), result, { EOL: '\n', spaces: '\t' });
