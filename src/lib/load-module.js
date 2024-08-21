import { $alert } from '@nuogz/vue-alert';




/** @param {import('vue').App} app */
export async function install(app) {
	const loadersModule$pathSlot = import.meta.glob(['../*/**/*.vue', '!../lib/**', '!../**/[A-Z]*.vue']);


	const loadModule = moduleNow => async slot => {
		if(app.component(slot)) { return moduleNow.value = slot; }

		const path = String(slot).split('-').join('/');
		try {
			let module;

			try {
				const loader = loadersModule$pathSlot[`../${path}.vue`];

				if(loader === undefined) { throw Error(`找不到模块`); }
				else if(typeof loader == 'function') { module = (await loader()); }
				else if(loader instanceof Promise) { module = (await Promise.resolve(loader)); }
			}
			catch(error) {
				if(error.message != `找不到模块`) { throw error; }

				const loader = loadersModule$pathSlot[`../${path}/index.vue`];
				if(loader === undefined) { throw Error(`找不到模块`); }
				else if(typeof loader == 'function') { module = (await loader()); }
				else { module = (await Promise.resolve(loader)); }
			}


			if(module && 'default' in module) {
				app.component(slot, module.default);

				moduleNow.value = slot;
			}
			else {
				throw Error('模块为空');
			}
		}
		catch(error) {
			$alert(`加载模块[${slot}]失败。原因：${error.message || error}`, '加载模块失败');

			throw error;
		}
	};


	app.provide('load-module', loadModule);
}
