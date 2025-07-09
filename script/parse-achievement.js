import { readFileSync } from 'fs';
import { dirname, resolve as resolvePath } from 'path';
import { fileURLToPath } from 'url';

import { writeJSONSync } from 'fs-extra/esm';

import { parse as parseJSON } from '@nuogz/json-bigint';



const dir = dirname(fileURLToPath(import.meta.url));
const { dirDataRaw } = parseJSON(readFileSync(resolvePath(dir, './config.local.json'), 'utf-8'));

const texts$hash = parseJSON(readFileSync(resolvePath(dirDataRaw, 'TextMap/TextMapCHS.json'), 'utf-8'));

const achievementsRaw = parseJSON(readFileSync(resolvePath(dirDataRaw, 'ExcelOutput/AchievementData.json'), 'utf-8'));

const achievements = parseJSON(readFileSync(resolvePath(dir, '../meta/meta.achievement.json'), 'utf-8'));


const idsInclude = [];

const result = [];
for(const raw of achievementsRaw) {
	if(idsInclude.length && !idsInclude.includes(raw.AchievementID)) { continue; }

	raw.AchievementTitle = texts$hash[raw.AchievementTitle?.Hash] ?? (raw.AchievementTitle?.Hash ? `未知标题<${raw.AchievementTitle?.Hash}>` : raw.AchievementTitle?.Hash) ?? raw.AchievementTitle?.Hash;
	raw.AchievementDesc = texts$hash[raw.AchievementDesc?.Hash] ?? (raw.AchievementDesc?.Hash ? `未知描述<${raw.AchievementDesc?.Hash}>` : raw.AchievementDesc?.Hash) ?? raw.AchievementDesc?.Hash;
	raw.HideAchievementDesc = texts$hash[raw.HideAchievementDesc?.Hash] ?? (raw.HideAchievementDesc?.Hash ? `未知隐藏描述<${raw.HideAchievementDesc?.Hash}>` : raw.HideAchievementDesc?.Hash) ?? raw.HideAchievementDesc?.Hash;
	// raw.AchievementDescPS = texts$hash[raw.AchievementDescPS?.Hash] ?? (raw.AchievementDescPS?.Hash ? `未知PS隐藏描述<${raw.AchievementDescPS?.Hash}>` : raw.AchievementDescPS?.Hash) ?? raw.AchievementDescPS?.Hash;
	// raw.RecordText = texts$hash[raw.RecordText?.Hash] ?? (raw.RecordText?.Hash ? `未知记录文本<${raw.RecordText?.Hash}>` : raw.RecordText?.Hash) ?? raw.RecordText?.Hash;
	// raw.AchievementTitlePS = texts$hash[raw.AchievementTitlePS?.Hash] ?? (raw.AchievementTitlePS?.Hash ? `未知PS标题<${raw.AchievementTitlePS?.Hash}>` : raw.AchievementTitlePS?.Hash) ?? raw.AchievementTitlePS?.Hash;

	// delete raw.PSTrophyID;
	// delete raw.RecordText;
	// delete raw.AchievementTitlePS;
	// delete raw.AchievementDescPS;

	// delete raw.QuestID;
	// delete raw.LinearQuestID;


	const achievementOld = achievements.find(a => a.id == raw.AchievementID);
	const achievementNew = achievementOld || {};


	achievementNew.id = raw.AchievementID;
	achievementNew.title = raw.AchievementTitle;
	achievementNew.desc = raw.AchievementDesc;
	achievementNew.rarity = raw.Rarity;
	achievementNew.series = raw.SeriesID;
	achievementNew.descHide = raw.HideAchievementDesc || undefined;
	achievementNew.paramsText = raw.ParamList.length ? raw.ParamList.map(p => {
		if(Object.keys(p).length != 1 || !('Value' in p)) { globalThis.console.log(raw.AchievementID, 'ParamList?'); }

		return p.Value;
	}) : undefined;
	achievementNew.priority = raw.Priority;


	result.push(achievementNew);
	if(achievementOld !== achievementNew) {

		achievementNew.idsAchievementExclusive = [];
		achievementNew.tags = [`版本:${process.argv[2] ?? '3.x'}`];
		achievementNew.difficulty = {};

		if(raw.ShowType == 'ShowAfterFinish') { achievementNew.tags.push('隐藏成就'); }
		else if(raw.ShowType == 'HiddenDesc') { achievementNew.tags.push('隐藏描述'); }
		else if(raw.ShowType) { globalThis.console.warn(raw.AchievementID, raw.ShowType); }
	}
}



// writeFileSync(resolvePath(dir, '../meta/meta.achievement.json'), stringifyJSON(result.sort((a, b) => a.id - b.id), null, '\t'));
writeJSONSync(resolvePath(dir, '../meta/meta.achievement.json'), result.sort((a, b) => a.id - b.id), { EOL: '\n', spaces: '\t' });
