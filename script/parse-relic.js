import { dirname, resolve as resolvePath } from 'path';
import { fileURLToPath } from 'url';

import { readJSONSync, writeJSONSync } from 'fs-extra/esm';
import { GetStableHash } from '../src/lib/get-stable-hash.pure.js';



const dir = dirname(fileURLToPath(import.meta.url));
const { dirDataRaw } = readJSONSync(resolvePath(dir, './config.local.json'));

const setsRelic = readJSONSync(resolvePath(dir, '../meta/meta.relicSet.json'));

const R = {
	texts$hash: readJSONSync(resolvePath(dirDataRaw, 'TextMap/TextMapCHS.json')),

	setsRelic: readJSONSync(resolvePath(dirDataRaw, 'ExcelOutput/RelicSetConfig.json')),
	skillsSetRelic: readJSONSync(resolvePath(dirDataRaw, 'ExcelOutput/RelicSetSkillConfig.json')),
	relices: readJSONSync(resolvePath(dirDataRaw, 'ExcelOutput/RelicConfig.json')),
	itemsRelic: readJSONSync(resolvePath(dirDataRaw, 'ExcelOutput/ItemConfigRelic.json')),
};



const resultSetRelic = [];
for(const setRelicRaw of R.setsRelic) {
	const setRelic = {
		id: String(setRelicRaw.SetID),
		type: setRelicRaw.IsPlanarSuit ? 'Planar' : 'Cavern',
		skills: {},
		idsRelic: [],
		versionAdded: setsRelic.find(meta => meta.id == setRelicRaw.SetID)?.versionAdded ?? process.argv[2] ?? '3.x',
		$data$locale: {
			'zh-cn': {
				name: R.texts$hash[setRelicRaw.SetName?.Hash],
			}
		}
	};

	resultSetRelic.push(setRelic);



	const skillsSetRelicRaw = R.skillsSetRelic.filter(skill => skill.SetID == Number(setRelic.id));
	for(const skillSetRelicRaw of skillsSetRelicRaw) {
		const skill = {
			countRequire: skillSetRelicRaw.RequireNum,
			params: skillSetRelicRaw.AbilityParamList,
			$data$locale: {
				'zh-cn': {
					desc: R.texts$hash[GetStableHash(skillSetRelicRaw.SkillDesc)],
				}
			}
		};

		setRelic.skills[skill.countRequire] = skill;
	}



	const relicesRaw = R.relices.filter(relic => relic.Rarity == 'CombatPowerRelicRarity5' && relic.SetID == Number(setRelic.id));

	for(const relicRaw of relicesRaw) {
		const itemRelicRaw = R.itemsRelic.find(item => item.ID == relicRaw.ID);

		const relic = {
			id: String(relicRaw.ID),
			type: String(relicRaw.Type),
			$data$locale: {
				'zh-cn': {
					name: R.texts$hash[itemRelicRaw.ItemName?.Hash],
					desc: R.texts$hash[itemRelicRaw.ItemDesc?.Hash],
					descBG: R.texts$hash[itemRelicRaw.ItemBGDesc?.Hash],
				}
			}
		};

		setRelic.idsRelic.push(relic);
	}
}
resultSetRelic.sort((a, b) => a.id - b.id);



writeJSONSync(resolvePath(dir, '../meta/meta.relicSet.json'), resultSetRelic, { EOL: '\n', spaces: '\t' });
