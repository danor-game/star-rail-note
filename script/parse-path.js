import { readFileSync } from 'fs';
import { dirname, resolve as resolvePath } from 'path';
import { fileURLToPath } from 'url';

import { writeJSONSync } from 'fs-extra/esm';

import { parse as parseJSON } from '@nuogz/json-bigint';



const dir = dirname(fileURLToPath(import.meta.url));
const { dirDataRaw } = parseJSON(readFileSync(resolvePath(dir, './config.local.json'), 'utf-8'));

const texts$hash = parseJSON(readFileSync(resolvePath(dirDataRaw, 'TextMap/TextMapCHS.json'), 'utf-8'));

const pathsRaw = parseJSON(readFileSync(resolvePath(dirDataRaw, 'ExcelOutput/AvatarBaseType.json'), 'utf-8'));

const paths = parseJSON(readFileSync(resolvePath(dir, '../meta/meta.path.json'), 'utf-8'));


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
