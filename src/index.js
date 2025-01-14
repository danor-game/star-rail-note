import './index.env.js';
import './lib/day.js';

import { createApp } from 'vue';

import { brop } from '@nuogz/utility';
import { aegis } from '@nuogz/aegis';
import { install as installAlert, $alert } from '@nuogz/vue-alert';
import { install as installTip } from '@nuogz/vue-tip';
import { install as installMenu } from './lib/menu.js';
import { install as installModuleLoader } from './lib/load-module.js';

import App from './index.vue';



const app = createApp(App); app.provide('app', app);


const init = async () => {
	app.mixin({ data() { return { brop }; } });

	aegis.alert = $alert;

	await installAlert(app);
	await installTip(app);
	await installMenu(app);
	await installModuleLoader(app);


	app.mount('#app');
};

document.readyState == 'complete' ? await init() : window.addEventListener('load', init);
