import { dirname, resolve as resolvePath } from 'path';
import { fileURLToPath } from 'url';

import { readJSONSync, writeJSONSync } from 'fs-extra/esm';



const dir = dirname(fileURLToPath(import.meta.url));
const { dirDataRaw } = readJSONSync(resolvePath(dir, './config.local.json'));

const characters = readJSONSync(resolvePath(dir, '../meta/meta.character.json'));

const charactersRaw$id = readJSONSync(resolvePath(dirDataRaw, 'ExcelOutput/AvatarConfig.json'));
const texts$hash = readJSONSync(resolvePath(dirDataRaw, 'TextMap/TextMapCHS.json'));


const result = [];
for(const raw of Object.values(charactersRaw$id)) {
	const character = {
		id: String(raw.AvatarID),
		element: raw.DamageType,
		path: raw.AvatarBaseType,
		rarity: { CombatPowerAvatarRarityType4: 4, CombatPowerAvatarRarityType5: 5 }[raw.Rarity],
		gender: characters.find(meta => meta.id == raw.AvatarID)?.gender,
		versionAdded: characters.find(meta => meta.id == raw.AvatarID)?.versionAdded ?? process.argv[2] ?? '2.',
		versionAvailable: characters.find(meta => meta.id == raw.AvatarID)?.versionAvailable ?? process.argv[2] ?? '2.',
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
