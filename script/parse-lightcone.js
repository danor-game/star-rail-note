import { dirname, resolve as resolvePath } from 'path';
import { fileURLToPath } from 'url';

import { readJSONSync, writeJSONSync } from 'fs-extra/esm';



const dir = dirname(fileURLToPath(import.meta.url));
const { dirDataRaw } = readJSONSync(resolvePath(dir, './config.local.json'));

const lightcones = readJSONSync(resolvePath(dir, '../meta/meta.lightcone.json'));

const lightconesRaw$id = readJSONSync(resolvePath(dirDataRaw, 'ExcelOutput/EquipmentConfig.json'));
const skillsLightconeRaw = readJSONSync(resolvePath(dirDataRaw, 'ExcelOutput/EquipmentSkillConfig.json'));
const texts$hash = readJSONSync(resolvePath(dirDataRaw, 'TextMap/TextMapCHS.json'));


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
				nameEffect: texts$hash[skillsLightconeRaw.find(skill=>raw.SkillID==skill.SkillID)?.SkillName?.Hash],
			}
		}
	};

	result.push(lightcone);
}
result.sort((a, b) => a.id - b.id);



writeJSONSync(resolvePath(dir, '../meta/meta.lightcone.json'), result, { EOL: '\n', spaces: '\t' });
