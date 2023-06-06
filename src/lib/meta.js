import charactersMeta from '../../meta/meta.character.json';
import lightconesMeta from '../../meta/meta.lightcone.json';
import typesGachaMeta from '../../meta/meta.typeGacha.json';
import poolsGachaMeta from '../../meta/meta.poolGacha.json';



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


const loadLocale = async (type, lang = window.NENV_I18N_LOCALE) => {
	try {
		return (await import(`../../meta/${lang}/${type}.json`)).default;
	}
	catch(error) {
		return (await import(`../../meta/${lang.split('-')[0]}/${type}.json`)).default;
	}
};


const mixiObjects = (targets, sources) => {
	for(const keyTarget in targets) {
		const target = targets[keyTarget];


		const source = sources[keyTarget];
		for(const keySource in source) {
			target[keySource] = source[keySource];
		}
	}

	return targets;
};


const order$typeItemPool = {
	character: 1,
	lightcone: 2,
};


const characters$id = mixiObjects(charactersMeta, await loadLocale('character'));
const lightcones$id = mixiObjects(lightconesMeta, await loadLocale('lightcone'));
const typesGacha$id = mixiObjects(typesGachaMeta, await loadLocale('type-gacha'));
/** @type {Object<string, GachaPool>} */
const poolsGacha$id = mixiObjects(poolsGachaMeta, await loadLocale('pool-gacha'));

const M = {
	characters$id,
	characters: Object.values(characters$id),

	lightcones$id,
	lightcones: Object.values(lightcones$id),

	items$id: { ...characters$id, ...lightcones$id },
	items: [...Object.values(characters$id), ...Object.values(lightcones$id)],


	typesGacha$id,
	typesGacha: Object.values(typesGacha$id),

	poolsGacha$id,
	poolsGacha: Object.values(poolsGacha$id).sort((a, b) => (b.timeEnd ?? 0) - (a.timeEnd ?? 0) || (order$typeItemPool[a.typeItem] - order$typeItemPool[b.typeItem])),
};

M.poolsGacha.splice(0, 0, ...M.poolsGacha.splice(M.poolsGacha.indexOf(p => p.type == 1) - 1, 1));



export default M;
