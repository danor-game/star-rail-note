process.env.NENV_PKG_PATH = import.meta.url;

process.env.NENV_I18N_LOCALE = 'zh';
process.env.NENV_I18N_FORMAT = 'hades';

process.env.NENV_PANGU = 'command;config;day';


/** @param {import('commander').Command} CMD */
process.preloadCommand = (CMD, resultCommand) => {
	CMD.command('fetch')
		.description('抓取跃迁记录')
		.argument('<key>', '关键词')
		.argument('[key-type]', '关键词类型', 'uid')
		.action((key, typeKey) => resultCommand.$fetch = { key, typeKey });
};
