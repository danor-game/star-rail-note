import { readFileSync } from 'fs';
import { dirname, resolve as resolvePath } from 'path';
import { fileURLToPath } from 'url';

import { writeJSONSync } from 'fs-extra/esm';

import { parse as parseJSON } from '@nuogz/json-bigint';



const dir = dirname(fileURLToPath(import.meta.url));
const { dirDataRaw } = parseJSON(readFileSync(resolvePath(dir, './config.local.json'), 'utf-8'));

const texts$hash = parseJSON(readFileSync(resolvePath(dirDataRaw, 'TextMap/TextMapCHS.json'), 'utf-8'));

const charactersRaw = [
	...parseJSON(readFileSync(resolvePath(dirDataRaw, 'ExcelOutput/AvatarConfig.json'), 'utf-8')),
	...parseJSON(readFileSync(resolvePath(dirDataRaw, 'ExcelOutput/AvatarConfigLD.json'), 'utf-8')),
];
const promotionsRaw = [
	...parseJSON(readFileSync(resolvePath(dirDataRaw, 'ExcelOutput/AvatarPromotionConfig.json'), 'utf-8')),
	...parseJSON(readFileSync(resolvePath(dirDataRaw, 'ExcelOutput/AvatarPromotionConfigLD.json'), 'utf-8')),
];

const characters = parseJSON(readFileSync(resolvePath(dir, '../meta/meta.character.json'), 'utf-8'));



const result = [];
for(const raw of charactersRaw) {
	const character = {
		id: String(raw.AvatarID),
		element: raw.DamageType,
		path: raw.AvatarBaseType,
		rarity: { CombatPowerAvatarRarityType4: 4, CombatPowerAvatarRarityType5: 5 }[raw.Rarity],
		gender: characters.find(meta => meta.id == raw.AvatarID)?.gender,
		arggro: promotionsRaw.find(promotion => promotion.AvatarID == raw.AvatarID)?.BaseAggro?.Value ?? 0,
		versionAdded: characters.find(meta => meta.id == raw.AvatarID)?.versionAdded ?? process.argv[2] ?? '4.x',
		versionAvailable: characters.find(meta => meta.id == raw.AvatarID)?.versionAvailable ?? process.argv[2] ?? '4.x',
		$data$locale: {
			'zh-cn': {
				name: texts$hash[raw.AvatarName?.Hash] == '{NICKNAME}' ? '开拓者' : texts$hash[raw.AvatarName?.Hash],
			}
		}
	};

	result.push(character);
}
result.sort((a, b) => a.id - b.id);



writeJSONSync(resolvePath(dir, '../meta/meta.character.json'), result, { EOL: '\n', spaces: '\t' });
