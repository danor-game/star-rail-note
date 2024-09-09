import { dirname, resolve as resolvePath } from 'path';
import { fileURLToPath } from 'url';

import { readJSONSync } from 'fs-extra/esm';
import { writeFileSync } from 'fs';



const dir = dirname(fileURLToPath(import.meta.url));


const choices = readJSONSync(resolvePath(dir, '../meta/meta.inclination.json'));
const choicesMark = readJSONSync(resolvePath(dir, '../meta/meta.inclinationMark.json'));


const textsTypeInclination = {
	1001: '热血',
	1002: '悲观',
	1003: '道歉',
	1004: '沉默',
	2001: '复读',
	3001: '性别',
};
const textsTypeMission = {
	Main: '开拓任务',
	Gap: '开拓续闻',
	Companion: '同行任务',
	Daily: '日常任务',
	Branch: '冒险任务',
	FirstDialogue: '初次对话NPC',
	'FirstDialogue-Heart': '初次对话NPC',
};
const textsPredicate = {
	'RPG.GameCore.ByHeroGender=GENDER_WOMAN': '开拓者性别为【女】',
	'RPG.GameCore.ByHeroGender=GENDER_MAN': '开拓者性别为【男】',
};


const sortChoice = (a, b) => {
	const versionA = Number(a.version);
	const versionB = Number(b.version);
	const typeMissionA = Number(Object.keys(textsTypeMission).indexOf(a.mission?.type) + 1 || 99);
	const typeMissionB = Number(Object.keys(textsTypeMission).indexOf(b.mission?.type) + 1 || 99);
	const idMissionA = Number(a.mission?.id ?? 9999999999);
	const idMissionB = Number(b.mission?.id ?? 9999999999);


	return (versionA - versionB) || (typeMissionA - typeMissionB) || (idMissionA - idMissionB);
};

const idsChoiceAll = new Set(choices.map(choice => [choice.id, choice.matches?.map(m => m.id) ?? []]).flat(2));
const choicesAll = choices.map(choice => [choice, choice.matches ?? []]).flat(2);

const texts = [];

const renderChoice = (choice, isMatches = false) => {
	const choiceMark = choicesMark.find(choiceMark => choiceMark.id == choice.id);
	choice = Object.assign(choice, choiceMark?.assgin);

	let { version, mission, performance, sentencesPrev, timelinePrev, optionsComrade, predicate } = choice;
	const { optionsUseful } = choice;


	if(choices.find(choiceAlter => choiceAlter !== choice && choiceAlter.slotUseful == choice.slotUseful && choiceAlter.pushed)) {
		globalThis.console.log('跳过', optionsUseful.length > 1 || isMatches, optionsUseful.length, isMatches, choice.id, choice.text);

		return choice.pushed = 'skipped';
	}

	if(!performance) { performance = choicesAll.find(choiceAlter => choiceAlter !== choice && choiceAlter.slotUseful == choice.slotUseful)?.performance; }
	if(!sentencesPrev) { sentencesPrev = choicesAll.find(choiceAlter => choiceAlter !== choice && choiceAlter.slotUseful == choice.slotUseful)?.sentencesPrev; }
	if(!timelinePrev) { timelinePrev = choicesAll.find(choiceAlter => choiceAlter !== choice && choiceAlter.slotUseful == choice.slotUseful)?.timelinePrev; }


	const textMission = mission
		? `${textsTypeMission[mission?.type] ?? '任务'}【${mission?.name}】`
		: '未知任务';
	const textPosition = performance
		? performance.namePlane && performance.namePlane != performance.nameFloor
			? `${performance.namePlane} --> ${performance.nameFloor}`
			: `${performance.nameFloor}`
		: '未知位置';
	const textPrev = sentencesPrev
		? sentencesPrev.map(s => `\t【${s}】`).join('\n')
		: timelinePrev
			? '\t没有前文，可能刚转场或刚播放动画'
			: '\t前文未知';
	const textsOption = optionsComrade.map(option => {
		const typeInclinationOption = choices.find(c => c.id == option.id)?.typeInclination;

		return `\t${typeInclinationOption ? `${textsTypeInclination[typeInclinationOption]}` : ''}【${option.text}】`;
	});

	const text = `
${texts.length + 1}、v${version} ${textMission}
位置：${textPosition}
${predicate ? `条件：${textsPredicate[`${predicate.$type}=${predicate.Gender}`]}` : '${remove-line}'}
前文：
${textPrev}
选项：${optionsUseful.length > 1 ? `（${optionsUseful.length}个互斥有效选项！）` : ''}
${textsOption.join('\n')}
	`.trim().replaceAll('\n${remove-line}', '');

	texts.push(text);
	choice.pushed = true;


	if(choice.matches) {
		for(let index = 0; index < choice.matches?.length; index++) {
			const match = choice.matches?.[index];

			renderChoice(Object.assign({}, choice, match, { matches: null }), true);
		}
	}
};


for(let choice of choices) {
	const { optionsComrade } = choice;

	choice.optionsUseful = optionsComrade.filter(option => idsChoiceAll.has(option.id));
	choice.slotUseful = `${choice.mission?.id}:${optionsComrade.map(option => `${idsChoiceAll.has(option.id) ? '!' : ''}${option.id}`).join('+')}`;

	for(const match of choice.matches ?? []) {
		match.optionsUseful = match.optionsComrade.filter(option => idsChoiceAll.has(option.id));
		match.slotUseful = `${choice.mission?.id}:${match.optionsComrade.map(option => `${idsChoiceAll.has(option.id) ? '!' : ''}${option.id}`).join('+')}`;
	}
}


for(let choice of choices
	// .filter(choice => choice.typeInclination == 3001)
	.sort(sortChoice)
) {
	renderChoice(choice);
}



writeFileSync(resolvePath(dir, '../test/local/inclination-texts.txt'), texts.join('\n\n'));
