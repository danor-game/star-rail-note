import './index.env.js';

import { O } from '@nuogz/pangu';

import fetchLog from './lib/fetch-log.js';
import showURL from './lib/show-url.js';



if(O.$fetch) { fetchLog(O.$fetch.key); }
if(O.$showURL) { showURL(O.$showURL.key); }
