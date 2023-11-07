import api from '../../meta/meta.api.json';

import charactersMeta from '../../meta/meta.character.json';
import lightconesMeta from '../../meta/meta.lightcone.json';
import metasTypeGacha from '../../meta/meta.typeGacha.json';
import metasPoolGacha$id from '../../meta/meta.poolGacha.json';
import elementsMeta from '../../meta/meta.element.json';
import metasPath$id from '../../meta/meta.path.json';



/**
 * @typedef {Object} GachaPool
 * @property {string} id 2001
 * @property {string} type 11
 * @property {'character'|'lightcone'} [typeItem]
 * @property {string[]} [itemsBoost5]
 * @property {string[]} [itemsBoost4]
 * @property {number} [timeBegin] 1684317600
 * @property {number} [timeEnd] 1686034799
 * @property {number} [max] 50
 * @property {string} versionAdded 1.0
 * @property {number} rerun 1
 * @property {string} idLeader 2001
 *
 * @property {string} name (locale variant)
 */



const locales = navigator.languages.map(language => language.toLowerCase());
const parseMetaLang = object => {
	if(typeof object != 'object') { return object; }


	if(object instanceof Array) {
		for(const item of object) {
			parseMetaLang(item);
		}
	}


	if('data$locale' in object) {
		const { data$locale } = object;

		Object.assign(object,
			locales.map(locale => data$locale[locale]).filter(d => d)[0],
			Object.values(data$locale)[0]
		);

		delete object.data$locale;
	}


	for(const key of Object.keys(object).filter(key => key != 'data$locale')) {
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
	characters$id: parseMetaLang(charactersMeta),
	characters: Object.values(charactersMeta),

	lightcones$id: parseMetaLang(lightconesMeta),
	lightcones: Object.values(lightconesMeta),

	items$id: { ...charactersMeta, ...lightconesMeta },
	items: [...Object.values(charactersMeta), ...Object.values(lightconesMeta)],


	typesGacha: parseMetaLang(metasTypeGacha),
	typesGacha$id: toIDMapObject(metasTypeGacha),

	/** @type {Object<string, GachaPool>} */
	poolsGacha$id: parseMetaLang(metasPoolGacha$id),
	/** @type {GachaPool[]} */
	poolsGacha: Object.values(metasPoolGacha$id).sort((a, b) => {
		if(a.type < 10 || b.type < 10) { return a.type - b.type; }

		return Number(String(b.id).slice(1, 4)) - Number(String(a.id).slice(1, 4));
	}),

	elements$id: parseMetaLang(elementsMeta),
	elements: Object.values(elementsMeta),

	paths$id: parseMetaLang(metasPath$id),
	paths: Object.values(metasPath$id),

	api,
};



export default M;
