import { dirname, resolve as resolvePath } from 'path';
import { fileURLToPath } from 'url';

import { readJSONSync, writeJSONSync } from 'fs-extra/esm';



const dir = dirname(fileURLToPath(import.meta.url));
const { dirDataRaw } = readJSONSync(resolvePath(dir, './config.local.json'));

const achievements = readJSONSync(resolvePath(dir, '../meta/meta.achievement.json'));

const achievementsRaw = readJSONSync(resolvePath(dirDataRaw, 'ExcelOutput/AchievementData.json'));
const texts$hash = readJSONSync(resolvePath(dirDataRaw, 'TextMap/TextMapCHS.json'));
texts$hash[371857150] = '';


const idsInclude = [];

const result = [];
for(const raw of achievementsRaw) {
	if(idsInclude.length && !idsInclude.includes(raw.AchievementID)) { continue; }

	raw.AchievementTitle = texts$hash[raw.AchievementTitle.Hash] ?? raw.AchievementTitle;
	raw.AchievementDesc = texts$hash[raw.AchievementDesc.Hash] ?? raw.AchievementDesc;
	raw.HideAchievementDesc = texts$hash[raw.HideAchievementDesc.Hash] ?? raw.HideAchievementDesc;
	raw.AchievementDescPS = texts$hash[raw.AchievementDescPS.Hash] ?? raw.AchievementDescPS;
	raw.RecordText = texts$hash[raw.RecordText.Hash] ?? raw.RecordText;
	raw.AchievementTitlePS = texts$hash[raw.AchievementTitlePS.Hash] ?? raw.AchievementTitlePS;

	delete raw.PSTrophyID;
	delete raw.RecordText;
	delete raw.AchievementTitlePS;
	delete raw.AchievementDescPS;


	delete raw.QuestID;
	delete raw.LinearQuestID;


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



writeJSONSync(resolvePath(dir, '../meta/meta.achievement.json'), result.sort((a, b) => a.id - b.id), { EOL: '\n', spaces: '\t' });
