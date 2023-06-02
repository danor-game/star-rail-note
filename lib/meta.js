import { C, Poseidon } from '@nuogz/pangu';



export const M = new Poseidon(C.dir.meta);

M.$.prefixFile = 'meta';
