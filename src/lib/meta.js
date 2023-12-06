import api from '../../meta/meta.api.json';

import metasTypePoolGacha from '../../meta/meta.typeGacha.json';
import metasPoolGacha from '../../meta/meta.poolGacha.json';

import metasPath from '../../meta/meta.path.json';
import metasElement from '../../meta/meta.element.json';

import metasCharacter from '../../meta/meta.character.json';
import meatasLightcone from '../../meta/meta.lightcone.json';



/**
 * @typedef {Object} GachaPoolType
 * @property {string} id 11
 * @property {string} [minimum5] 90
 * @property {number} [order] 1
 *
 * @property {string} name (locale variant)
 */

/**
 * @typedef {Object} GachaPool
 * @property {string} id 2001
 * @property {string} type 11
 * @property {number} [timeStart] 1684317600
 * @property {number} [timeEnd] 1686034799
 * @property {'character'|'lightcone'} [typeItem]
 * @property {string[]} [itemsBoost5]
 * @property {string[]} [itemsBoost4]
 * @property {number} [max] 50
 * @property {string} versionAdded 1.0
 * @property {number} rerun 1
 * @property {string} idLeader 2001
 * @property {boolean} [unknown] false
 *
 * @property {string} name (locale variant)
 */

/**
 * @typedef {Object} Path
 * @property {string} id Warrior
 * @property {string} versionAdded 1.0
 *
 * @property {string} name (locale variant)
 * @property {string} description (locale variant)
 */
/**
 * @typedef {Object} Element
 * @property {string} id Physical
 * @property {string} color #FFFFFF
 * @property {string} versionAdded 1.0
 *
 * @property {string} name (locale variant)
 * @property {string} description (locale variant)
 */
/**
 * @typedef {Object} Character
 * @property {string} id 1001
 * @property {string} element Ice
 * @property {string} path Knight
 * @property {number} rarity 4
 * @property {string} versionAdded 1.0
 * @property {string} versionAvailable 1.0
 *
 * @property {string} name (locale variant)
 */
/**
 * @typedef {Object} Lightcone
 * @property {string} id 23001
 * @property {string} path Rogue
 * @property {number} rarity 5
 * @property {string} [characterBest] 1102
 * @property {string} versionAdded 1.0
 *
 * @property {string} name (locale variant)
 * @property {string} nameEffect (locale variant)
 */
/**
 * @typedef {Character|Lightcone} Item
 */



const locales = navigator.languages.map(language => language.toLowerCase());
const parseMetaLang = object => {
	if(typeof object != 'object') { return object; }


	if(object instanceof Array) {
		for(const item of object) {
			parseMetaLang(item);
		}
	}


	if('$data$locale' in object) {
		const { $data$locale } = object;

		Object.assign(object,
			locales.map(locale => $data$locale[locale]).filter(d => d)[0],
			Object.values($data$locale)[0]
		);

		delete object.$data$locale;
	}


	for(const key of Object.keys(object).filter(key => key != '$data$locale')) {
		parseMetaLang(object[key]);
	}


	return object;
};
const toIDMapObject = array => {
	const result = {};

	for(const item of array) {
		result[item.id] = item;
	}

	return result;
};


const M = {
	/** @type {GachaPoolType[]} */
	typesPoolGacha: parseMetaLang(metasTypePoolGacha).sort((a, b) => a.order - b.order),
	/** @type {Object<string, GachaPoolType>} */
	typesPoolGacha$id: toIDMapObject(metasTypePoolGacha),

	/** @type {GachaPool[]} */
	poolsGacha: parseMetaLang(metasPoolGacha).sort((a, b) => {
		if(a.type < 10 || b.type < 10) { return a.type - b.type; }

		return Number(String(b.id).slice(1, 4)) - Number(String(a.id).slice(1, 4));
	}),
	/** @type {Object<string, GachaPool>} */
	poolsGacha$id: toIDMapObject(metasPoolGacha),


	/** @type {Path[]} */
	paths: parseMetaLang(metasPath),
	/** @type {Object<string, Path>} */
	paths$id: toIDMapObject(metasPath),

	/** @type {Element[]} */
	elements: parseMetaLang(metasElement),
	/** @type {Object<string, Element>} */
	elements$id: toIDMapObject(metasElement),


	/** @type {Character[]} */
	characters: parseMetaLang(metasCharacter),
	/** @type {Object<string, Character>} */
	characters$id: toIDMapObject(metasCharacter),

	/** @type {Lightcone[]} */
	lightcones: parseMetaLang(meatasLightcone),
	/** @type {Object<string, Lightcone>} */
	lightcones$id: toIDMapObject(meatasLightcone),

	/** @type {Item[]} */
	items: [...metasCharacter, ...meatasLightcone],
	/** @type {Object<string, Item>} */
	items$id: { ...toIDMapObject(metasCharacter), ...toIDMapObject(meatasLightcone) },


	api,
};



export default M;
