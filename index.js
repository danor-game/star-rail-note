import './index.env.js';

import { O } from '@nuogz/pangu';

import fetchLog from './lib/fetch-log.js';



if(O.$fetch) { fetchLog(O.$fetch.key); }
