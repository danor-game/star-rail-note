import { readFileSync } from 'fs';
import { dirname, resolve as resolvePath } from 'path';
import { fileURLToPath } from 'url';

import { writeJSONSync } from 'fs-extra/esm';

import { parse as parseJSON } from '@nuogz/json-bigint';



const dir = dirname(fileURLToPath(import.meta.url));
const { dirDataRaw } = parseJSON(readFileSync(resolvePath(dir, './config.local.json'), 'utf-8'));

const lightcones = parseJSON(readFileSync(resolvePath(dir, '../meta/meta.lightcone.json'), 'utf-8'));

const lightconesRaw$id = parseJSON(readFileSync(resolvePath(dirDataRaw, 'ExcelOutput/EquipmentConfig.json'), 'utf-8'));
const skillsLightconeRaw = parseJSON(readFileSync(resolvePath(dirDataRaw, 'ExcelOutput/EquipmentSkillConfig.json'), 'utf-8'));
const texts$hash = parseJSON(readFileSync(resolvePath(dirDataRaw, 'TextMap/TextMapCHS.json'), 'utf-8'));


const result = [];
for(const raw of lightconesRaw$id) {
	const lightcone = {
		id: String(raw.EquipmentID),
		path: raw.AvatarBaseType,
		rarity: { CombatPowerLightconeRarity3: 3, CombatPowerLightconeRarity4: 4, CombatPowerLightconeRarity5: 5 }[raw.Rarity],
		characterBest: lightcones.find(meta => meta.id == raw.EquipmentID)?.characterBest,
		versionAdded: lightcones.find(meta => meta.id == raw.EquipmentID)?.versionAdded ?? process.argv[2] ?? '3.x',
		$data$locale: {
			'zh-cn': {
				name: texts$hash[raw.EquipmentName?.Hash],
				nameEffect: texts$hash[skillsLightconeRaw.find(skill => raw.SkillID == skill.SkillID)?.SkillName?.Hash],
			}
		}
	};

	result.push(lightcone);
}
result.sort((a, b) => a.id - b.id);



writeJSONSync(resolvePath(dir, '../meta/meta.lightcone.json'), result, { EOL: '\n', spaces: '\t' });
