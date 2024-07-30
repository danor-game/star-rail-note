import { dirname, parse as parsePath, resolve as resolvePath } from 'path';
import { fileURLToPath } from 'url';

import { readJSONSync, writeJSONSync } from 'fs-extra/esm';
import ReaddirRecur from 'fs-readdir-recursive';
import { GetStableHash } from '../src/lib/get-stable-hash.pure.js';



const dir = dirname(fileURLToPath(import.meta.url));
const { dirDataRaw } = readJSONSync(resolvePath(dir, './config.local.json'));


const choicesOld = readJSONSync(resolvePath(dir, '../meta/meta.inclination.json'));

const texts$hash = readJSONSync(resolvePath(dirDataRaw, 'TextMap/TextMapCHS.json'));
texts$hash[371857150] = '';

const textsInclination = readJSONSync(resolvePath(dirDataRaw, 'ExcelOutput/InclinationText.json'));
const sentencesTalk = readJSONSync(resolvePath(dirDataRaw, 'ExcelOutput/TalkSentenceConfig.json'));
const missionsMain = readJSONSync(resolvePath(dirDataRaw, 'ExcelOutput/MainMission.json'));
const planesMaze = readJSONSync(resolvePath(dirDataRaw, 'ExcelOutput/MazePlane.json'));
const floorsMaze = readJSONSync(resolvePath(dirDataRaw, 'ExcelOutput/MazeFloor.json'));
const datasNPC = readJSONSync(resolvePath(dirDataRaw, 'ExcelOutput/NPCData.json'));

const performances = [
	...Object.values(readJSONSync(resolvePath(dirDataRaw, 'ExcelOutput/PerformanceA.json'))),
	...Object.values(readJSONSync(resolvePath(dirDataRaw, 'ExcelOutput/PerformanceC.json'))),
	...Object.values(readJSONSync(resolvePath(dirDataRaw, 'ExcelOutput/PerformanceCG.json'))),
	...Object.values(readJSONSync(resolvePath(dirDataRaw, 'ExcelOutput/PerformanceD.json'))),
	...Object.values(readJSONSync(resolvePath(dirDataRaw, 'ExcelOutput/PerformanceDS.json'))),
	...Object.values(readJSONSync(resolvePath(dirDataRaw, 'ExcelOutput/PerformanceE.json'))),
	...Object.values(readJSONSync(resolvePath(dirDataRaw, 'ExcelOutput/PerformanceVideo.json'))),
];

const typesInclination$type = {
	1001: '热血',
	1002: '悲观',
	1003: '道歉',
	1004: '沉默',
	2001: '复读',
	3001: '性别',
};

/** @param {string} string @returns {string} */
const parseSentenceSlot = string => !string ? string : string
	.replaceAll('{NICKNAME}', '#开拓者')
	.replaceAll('{TEXTJOIN#54}', '#次元扑满')
	.replaceAll('{TEXTJOIN#87}', '#晖长石号')
	.replaceAll(/\{F#(.*?)\}/g, '(#星：$1)')
	.replaceAll(/\{M#(.*?)\}/g, '(#穹：$1)')
	.replaceAll(/<\/?color(=.*?)?>/g, '');


const choices = [];
const choices$id = {};

for(const typeInclination in typesInclination$type) {
	for(const textInclination of textsInclination) {
		if(!textInclination.InclinationTypeList.includes(Number(typeInclination))) { continue; }


		const idSentence = textInclination.TalkSentenceID;
		const sentence = sentencesTalk.find(sentence => sentence.TalkSentenceID == idSentence);
		if(sentence.TalkSentenceID != idSentence) { throw Error(`Sentence的id不等于key: ${idSentence} != ${sentence.TalkSentenceID}`); }

		const hashTextSentence = sentence.TalkSentenceText.Hash;


		if(idSentence in choices$id) { throw Error(`Choices id 重复: ${idSentence}`); }

		choices.push(choices$id[idSentence] = {
			id: idSentence,
			typeInclination: Number(typeInclination),
			version: choicesOld.find(choice => choice.id == idSentence)?.version ?? process.argv[2] ?? '2.x',
			text: hashTextSentence in texts$hash ? parseSentenceSlot(texts$hash[hashTextSentence]) : '<!找不到句子文本>',
			matched: false,
		});
	}
}

const idsChoice = choices.map(s => s.id);


const checkTasks = (tasks, predicate, idMission, nameFile) => {
	let indexTask = 0;
	for(const task of tasks) {
		if(task.$type == 'RPG.GameCore.PlayOptionTalk') {
			const optionsInclination = task.OptionList.filter(option => idsChoice.includes(option.TalkSentenceID));

			for(const optionInclination of optionsInclination) {
				const sentencesPrev = [];

				let indexTaskPrev = indexTask - 1;
				let taskPrev = tasks[indexTaskPrev];
				while(
					indexTaskPrev > -1 &&
					taskPrev?.$type != 'RPG.GameCore.PlayAndWaitSimpleTalk' &&
					taskPrev?.$type != 'RPG.GameCore.PlaySimpleTalk' &&
					taskPrev?.$type != 'RPG.GameCore.PlayTimeline'
				) {
					taskPrev = tasks[--indexTaskPrev];
				}

				if(taskPrev?.$type == 'RPG.GameCore.PlayAndWaitSimpleTalk' || taskPrev?.$type == 'RPG.GameCore.PlaySimpleTalk') {
					sentencesPrev.push(...taskPrev.SimpleTalkList.map(talk => {
						const sentenceTalk = sentencesTalk.find(sentence => sentence.TalkSentenceID == talk.TalkSentenceID);
						const hashName = sentenceTalk.TextmapTalkSentenceName.Hash;
						const hashText = sentenceTalk.TalkSentenceText.Hash;
						const who = hashName in texts$hash ? parseSentenceSlot(texts$hash[hashName]) || '（旁白）' : `（未知）`;

						return parseSentenceSlot(`${who}：${texts$hash[hashText]}`);
					}));
				}
				else {
					if(taskPrev?.$type != 'RPG.GameCore.PlayTimeline') {
						globalThis.console.warn(optionInclination.TalkSentenceID, '未知的前置脚本');
					}
				}



				const choiceMain = choices$id[optionInclination.TalkSentenceID];


				let choice = choiceMain;
				if(choice.matched) {
					globalThis.console.warn('句子匹配多次', choice.file, nameFile, choice.id, choice.text);

					const choiceExtra = {};
					(choice.matches ?? (choice.matches = [])).push(choiceExtra);

					choice = choiceExtra;
				}
				if(choice == choiceMain) { choice.matched = true; }

				choice.file = nameFile;


				if(sentencesPrev.length) { choice.sentencesPrev = sentencesPrev; }
				if(taskPrev?.$type == 'RPG.GameCore.PlayTimeline') { choice.timelinePrev = taskPrev.TimelineName; }


				choice.optionsComrade = task.OptionList.map(option => ({
					id: option.TalkSentenceID,
					text: parseSentenceSlot(texts$hash[sentencesTalk.find(sentence => sentence.TalkSentenceID == option.TalkSentenceID).TalkSentenceText.Hash])
				}));

				choice.predicate = predicate;



				const performance = performances.find(performance => performance.PerformancePath.includes(nameFile));
				if(performance) {
					const idPerformance = performance.PerformanceID;
					const idPlane = performance.PlaneID ?? null;
					const idFloor = performance.FloorID ?? null;


					choice.performance = {
						id: idPerformance,
						idPlane,
						idFloor,
						namePlane: parseSentenceSlot(texts$hash[planesMaze.find(plane => plane.PlaneID == idPlane)?.PlaneName?.Hash] ?? null),
						nameFloor: parseSentenceSlot(texts$hash[GetStableHash(floorsMaze.find(floor => floor.FloorID == idFloor)?.FloorName)] ?? null),
					};


					if('FloorID' in performance == false) {
						try {
							const infoMission = readJSONSync(resolvePath(dirDataRaw, `Config/Level/Mission/${idMission}/MissionInfo_${idMission}.json`));

							for(const missionSub of infoMission.SubMissionList) {
								if(missionSub.ID == idPerformance) {
									choice.performance.idPlane = missionSub.LevelPlaneID ?? null;
									choice.performance.idFloor = missionSub.LevelFloorID ?? null;
									choice.performance.namePlane = parseSentenceSlot(texts$hash[planesMaze.find(plane => plane.PlaneID == missionSub.LevelPlaneID)?.PlaneName?.Hash]) ?? null;
									choice.performance.nameFloor = parseSentenceSlot(texts$hash[GetStableHash(floorsMaze.find(floor => floor.FloorID == missionSub.LevelFloorID)?.FloorName)]) ?? null;

									break;
								}
							}
						}
						catch { void 0; }
					}
				}
				else {
					choice.missedPerformance = true;
				}



				const missionMain = missionsMain.find(mission => mission.MainMissionID == idMission);
				const mission = choice.mission = { id: idMission };
				if(missionMain) {
					mission.name = texts$hash[missionMain?.Name?.Hash] ?? null;
					mission.type = missionMain?.Type ?? null;
				}
				if(!missionMain) {
					choice.missedMission = true;

					if(performance) {
						let matchedMission = false;
						try {
							const pathLevelGroup = `Config/LevelOutput/Group/Groups_P${performance.PlaneID}_F${performance.FloorID}`;
							const filesLevelGroup = ReaddirRecur(resolvePath(dirDataRaw, pathLevelGroup)).filter(file => file.startsWith('LevelGroup') && file.endsWith('.json'));

							filesLevelGroup: for(const file of filesLevelGroup) {
								const groupsLevel = readJSONSync(resolvePath(dirDataRaw, pathLevelGroup, file));

								for(const group of groupsLevel.NPCList) {
									if(group.FirstDialogueGroupID == idMission || group.FirstDialogueGroupID == `${idMission}01`) {
										mission.idNPC = group.NPCID;

										const hashTextName = group.OverrideNPCName?.Hash ?? datasNPC.find(dataNPC => dataNPC.ID == mission.idNPC)?.DefaultNPCName?.Hash;
										mission.name = hashTextName in texts$hash ? texts$hash[hashTextName] : '<!找不到NPC名称文本>';
										mission.type = 'FirstDialogue';

										delete choice.missedMission;
										matchedMission = true;
										break filesLevelGroup;
									}
								}
							}
						}
						catch { void 0; }

						if(!matchedMission) {
							const pathsDialHeart = 'Config/LevelOutput/HeartDial';
							const filesDialHeart = ReaddirRecur(resolvePath(dirDataRaw, 'Config/LevelOutput/HeartDial')).filter(file => file.startsWith('HeartDial') && file.endsWith('.json'));

							filesDialHeart: for(const file of filesDialHeart) {
								const dialsHeart = readJSONSync(resolvePath(dirDataRaw, pathsDialHeart, file));

								for(const dial of dialsHeart.DialogueConfigList ?? []) {
									if(dial.StartPerformance?.PerformanceID == performance.PerformanceID || dial.StartPerformanceOnFinish?.PerformanceID == performance.PerformanceID) {
										const infoFile = parsePath(file);
										mission.idNPC = Number(infoFile.name.match(/\d+/)[0]);

										if(!choice?.performance?.idFloor) {
											const { idPlane, idFloor } = dial.Dialog.LevelGraph.match(/P(?<idPlane>\d+)\/F(?<idFloor>\d+)/)?.groups ?? {};

											if(idFloor) {
												choice.performance.idPlane = Number(idPlane) ?? null;
												choice.performance.idFloor = Number(idFloor) ?? null;
												choice.performance.namePlane = parseSentenceSlot(texts$hash[planesMaze.push(plane => plane.PlaneID == idPlane)?.PlaneName?.Hash]) ?? null;
												choice.performance.nameFloor = parseSentenceSlot(texts$hash[GetStableHash(floorsMaze.find(floor => floor.FloorID == idFloor)?.FloorName)]) ?? null;
											}
										}

										const hashTextName = dial.OverrideNPCName?.Hash ?? datasNPC.find(dataNPC => dataNPC.ID == mission.idNPC)?.DefaultNPCName?.Hash;
										mission.name = hashTextName in texts$hash ? texts$hash[hashTextName] : '<!找不到NPC名称文本>';
										mission.type = 'FirstDialogue-Heart';

										delete choice.missedMission;
										break filesDialHeart;
									}
								}
							}
						}
					}
				}
			}
		}
		else if(task.$type == 'RPG.GameCore.PredicateTaskList') {
			if(task.SuccessTaskList?.length) {
				checkTasks([tasks.slice(0, indexTask), task.SuccessTaskList ?? []].flat(), task.Predicate, idMission, nameFile);
			}
			if(task.FailedTaskList?.length) {
				checkTasks([tasks.slice(0, indexTask), task.FailedTaskList ?? []].flat(), task.Predicate, idMission, nameFile);
			}
		}

		indexTask++;
	}
};


const parseAct = (path, pathFull) => {
	try {
		const infoFile = parsePath(pathFull);
		const segments = infoFile.dir.split(/[/\\]/);
		const indexMission = segments.indexOf('Mission');

		const idMission = segments[indexMission + 1];
		// if(!Number(idMission)) {
		// 	// globalThis.console.log(`文件路径不含任务ID信息, 跳过: ${path}`);
		// 	return;
		// }

		const act = readJSONSync(pathFull);


		const tasks = [act.OnInitSequece ?? [], act.OnStartSequece ?? []].flat().map(seq => seq.TaskList ?? []).flat();
		checkTasks(tasks, undefined, idMission, infoFile.name);
	}
	catch {
		void 0;
	}
};

for(const dirMission of [
	resolvePath(dirDataRaw, 'Config/Level/Mission'),
	resolvePath(dirDataRaw, 'Story/Discussion/Mission'),
	resolvePath(dirDataRaw, 'Story/Mission'),
]) {
	const paths = ReaddirRecur(dirMission).filter(name => {
		const info = parsePath(name);

		return (
			info.base.startsWith('Act') ||
			info.base.startsWith('Story') ||
			info.base.startsWith('DS')
		) && info.ext == '.json';
	});

	for(const path of paths) {
		parseAct(path, resolvePath(dirMission, path));
	}
}

// for(const path of performances.map(performance => performance.PerformancePath).sort()) {
// 	parseAct(path, resolvePath(dirDataRaw, path));
// }



writeJSONSync(
	resolvePath(dir, '../meta/meta.inclination.json'),
	choices.sort((a, b) => b.typeInclination - a.typeInclination || a.id - b.id),
	{ EOL: '\n', spaces: '\t' }
);
