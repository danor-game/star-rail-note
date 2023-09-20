import api from '../../meta/meta.api.json';

import charactersMeta from '../../meta/meta.character.json';
import lightconesMeta from '../../meta/meta.lightcone.json';
import metasTypeGacha$id from '../../meta/meta.typeGacha.json';
import metasPoolGacha$id from '../../meta/meta.poolGacha.json';
import elementsMeta from '../../meta/meta.element.json';
import metasPath$id from '../../meta/meta.path.json';



/**
 * @typedef {Object} GachaPool
 * @property {string} id
 * @property {string} type
 * @property {'character'|'lightcone'} [typeItem]
 * @property {string[]} [itemsBoost5]
 * @property {string[]} [itemsBoost4]
 * @property {number} [timeBegin] 1684317600
 * @property {number} [timeEnd] 1686034799
 * @property {number} [max] 50
 * @property {string} versionAdded 1.0
 *
 * @property {string} name (locale variant)
 */



const locales = navigator.languages.map(language => language.toLowerCase());
const parseMetaLang = object => {
	if(typeof object != 'object' || object instanceof Array) { return object; }


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


const order$typeItemPool = {
	character: 1,
	lightcone: 2,
};


const M = {
	characters$id: parseMetaLang(charactersMeta),
	characters: Object.values(charactersMeta),

	lightcones$id:parseMetaLang(lightconesMeta),
	lightcones: Object.values(lightconesMeta),

	items$id: { ...charactersMeta, ...lightconesMeta },
	items: [...Object.values(charactersMeta), ...Object.values(lightconesMeta)],


	typesGacha$id: parseMetaLang(metasTypeGacha$id),
	typesGacha: Object.values(metasTypeGacha$id),

	/** @type {Object<string, GachaPool>} */
	poolsGacha$id: parseMetaLang(metasPoolGacha$id),
	/** @type {GachaPool[]} */
	poolsGacha: Object.values(metasPoolGacha$id).sort((a, b) => (b.timeEnd ?? 0) - (a.timeEnd ?? 0) || (order$typeItemPool[a.typeItem] - order$typeItemPool[b.typeItem])),

	elements$id:parseMetaLang(elementsMeta),
	elements: Object.values(elementsMeta),

	paths$id: parseMetaLang(metasPath$id),
	paths: Object.values(metasPath$id),

	api,
};

M.poolsGacha.splice(0, 0, ...M.poolsGacha.splice(M.poolsGacha.indexOf(p => p.type == 1) - 1, 1));



export default M;
