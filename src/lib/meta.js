import characters from '../../meta/meta.character.json';
import lightcones from '../../meta/meta.lightcone.json';



export const M = {
	characters$id: characters,
	characters: Object.values(characters),

	lightcones$id: lightcones,
	lightcones: Object.values(lightcones),
};
