import { readFileSync } from 'fs';
import { dirname, resolve as resolvePath } from 'path';
import { fileURLToPath } from 'url';

import { writeJSONSync } from 'fs-extra/esm';
import XXHash from 'xxhashjs';

import { parse as parseJSON } from '@nuogz/json-bigint';



const dir = dirname(fileURLToPath(import.meta.url));
const { dirDataRaw } = parseJSON(readFileSync(resolvePath(dir, './config.local.json'), 'utf-8'));

const texts$hash = parseJSON(readFileSync(resolvePath(dirDataRaw, 'TextMap/TextMapCHS.json'), 'utf-8'));

const setsRelicRaw = parseJSON(readFileSync(resolvePath(dirDataRaw, 'ExcelOutput/RelicSetConfig.json'), 'utf-8'));
const skillsSetRelicRaw = parseJSON(readFileSync(resolvePath(dirDataRaw, 'ExcelOutput/RelicSetSkillConfig.json'), 'utf-8'));
const relicesRaw = parseJSON(readFileSync(resolvePath(dirDataRaw, 'ExcelOutput/RelicConfig.json'), 'utf-8'));
const itemsRelicRaw = parseJSON(readFileSync(resolvePath(dirDataRaw, 'ExcelOutput/ItemConfigRelic.json'), 'utf-8'));

const relics = parseJSON(readFileSync(resolvePath(dir, '../meta/meta.relicSet.json'), 'utf-8'));


const resultSetRelic = [];
for(const setRelicRaw of setsRelicRaw) {
	const setRelic = {
		id: String(setRelicRaw.SetID),
		type: setRelicRaw.IsPlanarSuit ? 'Planar' : 'Cavern',
		skills: {},
		idsRelic: [],
		versionAdded: relics.find(meta => meta.id == setRelicRaw.SetID)?.versionAdded ?? process.argv[2] ?? '3.x',
		$data$locale: {
			'zh-cn': {
				name: texts$hash[setRelicRaw.SetName?.Hash],
			}
		}
	};

	resultSetRelic.push(setRelic);



	const skillsSetRelicRawMatched = skillsSetRelicRaw.filter(skill => skill.SetID == Number(setRelic.id));
	for(const skillSetRelicRaw of skillsSetRelicRawMatched) {
		const skill = {
			countRequire: skillSetRelicRaw.RequireNum,
			params: skillSetRelicRaw.AbilityParamList,
			$data$locale: {
				'zh-cn': {
					desc: texts$hash[XXHash.h64(skillSetRelicRaw.SkillDesc, 0).toString(10)],
				}
			}
		};

		setRelic.skills[skill.countRequire] = skill;
	}


	const relicesRawMatched = relicesRaw.filter(relic => relic.Rarity == 'CombatPowerRelicRarity5' && relic.SetID == Number(setRelic.id));
	for(const relicRaw of relicesRawMatched) {
		const itemRelicRaw = itemsRelicRaw.find(item => item.ID == relicRaw.ID);

		const relic = {
			id: String(relicRaw.ID),
			type: String(relicRaw.Type),
			$data$locale: {
				'zh-cn': {
					name: texts$hash[itemRelicRaw.ItemName?.Hash],
					desc: texts$hash[itemRelicRaw.ItemDesc?.Hash],
					descBG: texts$hash[itemRelicRaw.ItemBGDesc?.Hash],
				}
			}
		};

		setRelic.idsRelic.push(relic);
	}
}
resultSetRelic.sort((a, b) => a.id - b.id);



writeJSONSync(resolvePath(dir, '../meta/meta.relicSet.json'), resultSetRelic, { EOL: '\n', spaces: '\t' });
