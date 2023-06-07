import { resolve } from 'path';

import { Poseidon } from '@nuogz/pangu';
import { dirFromFileURL } from '@nuogz/pangu/lib/dir.js';



export const M = new Poseidon(resolve(dirFromFileURL(import.meta.url),'..', 'meta'));
export const ML = new Poseidon(resolve(dirFromFileURL(import.meta.url),'..', 'meta', 'locale',process.env.NENV_I18N_LOCALE));


M.$.prefixFile = 'meta';
ML.$.prefixFile = 'locale';
