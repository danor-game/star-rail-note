import { dirname, resolve as resolvePath } from 'path';
import { fileURLToPath } from 'url';

import { readJSONSync, writeJSONSync } from 'fs-extra/esm';



const dir = dirname(fileURLToPath(import.meta.url));
const { dirDataRaw } = readJSONSync(resolvePath(dir, './config.local.json'));


const texts$hash = readJSONSync(resolvePath(dirDataRaw, 'TextMap/TextMapCHS.json'));
texts$hash[371857150] = '';

const textsInclination$id = readJSONSync(resolvePath(dirDataRaw, 'ExcelOutput/InclinationText.json'));
const sentencesTalk$id = readJSONSync(resolvePath(dirDataRaw, 'ExcelOutput/TalkSentenceConfig.json'));

const typesInclination$type = {
	1001: '热血',
	1002: '悲观',
	1003: '道歉',
	1004: '沉默',
	2001: '复读',
	3001: '性别',
	4001: '巡猎',
	4002: '存护',
	4003: '毁灭',
	4004: '欢愉',
	4005: '虚无',
	4006: '知识',
	4007: '丰饶',
};

/**
 * @param {string} string
 * @returns {string}
 */
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
	for(const textInclination of Object.values(textsInclination$id)) {
		if(!textInclination.InclinationTypeList.includes(Number(typeInclination))) { continue; }


		const idSentence = textInclination.TalkSentenceID;
		const sentence = sentencesTalk$id[idSentence];
		if(sentence.TalkSentenceID != idSentence) { throw Error(`Sentence的id不等于key: ${idSentence} != ${sentence.TalkSentenceID}`); }

		const hashTextSentence = sentence.TalkSentenceText.Hash;


		if(idSentence in choices$id) { choices$id[idSentence].typesInclination.push(Number(typeInclination)); }

		choices.push(choices$id[idSentence] = {
			id: idSentence,
			typesInclination: [Number(typeInclination)],
			text: hashTextSentence in texts$hash ? parseSentenceSlot(texts$hash[hashTextSentence]) : '<!找不到句子文本>',
		});
	}
}



writeJSONSync(
	resolvePath(dir, '../meta/meta.inclinationSimple.json'),
	choices.sort((a, b) => a.typeInclination - b.typeInclination).map(i => `${i.typesInclination.map(type=>`【${type} ${typesInclination$type[type]}】`).join('')} ${i.id} ==> ${i.text}`), { spaces: '\t', EOL: '\n' },
	{ EOL: '\n', spaces: '\t' }
);
