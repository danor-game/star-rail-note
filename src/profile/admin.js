import { ref } from 'vue';
import Day from '../lib/day.js';



/** 跃迁记录 */
class ParsedLog {
	/**
	 * 跃迁id
	 * - 格式 应为19位数字
	 * 示例 `"1715163000004047719"`
	 * @type {string}
	 */
	id;
	/**
	 * 获得的道具id
	 * 示例 `"20010"`
	 * @type {string}
	 */
	item;
	/**
	 * 跃迁池id
	 * 示例 `"1001"`
	 * @type {string}
	 */
	pool;
	/**
	 * 跃迁时间戳
	 * 示例 `1715164415`
	 * @type {number}
	 */
	time;
}

/** 玩家成就信息 */
export class PlayerAchievementInfo {
	/**
	 * 成就id
	 * - 示例 `4010101`
	 * @type {number}
	 */
	id;
	/**
	 * 完成状态
	 * - 值
	 *   - `0`, 未完成, 默认值
	 *   - `1`, 已完成
	 *   - `2`, 已错过
	 * - 示例 `1`
	 * @type {number}
	 */
	status = 0;
	/**
	 * 完成时间戳
	 * - 示例 `1703058453`
	 * @type {number|undefined}
	 */
	timeFinished;
	/**
	 * 搁置时间戳
	 * - 示例 `1703058453`
	 * @type {number|undefined}
	 */
	timeShelved;
	/**
	 * 是否已搁置
	 * - 为节省档案大小，当值为`false`是，会删除该数据
	 * @type {boolean|undefined}
	 */
	shelved;
}

/** DR跃迁笔记玩家档案 */
export class Profile {
	/**
	 * 唯一标识
	 * - 格式 `UUIDv7`
	 * @type {string}
	 */
	id;

	/**
	 * 昵称
	 * - 档案的昵称，并非游戏角色名
	 * - 创建时默认与游戏角色名相同
	 * - 当多个档案的游戏角色名重名时，可修改昵称用以区分
	 * @type {string}
	 */
	nick;

	/**
	 * 游戏角色的uid
	 * - 示例 `"101691019"`
	 * @type {string}
	 */
	uid;


	/**
	 * 官方`getGachaLog`接口的认证密钥，用于获取跃迁记录
	 * - 正常情况下48小时过期
	 * - 即使过期很快仍保存在档案中的原因是，方便短时间内的导出导入迁移
	 * @type {string}
	 */
	keyAuth;
	/**
	 * 官方`getGachaLog`接口的认证密钥版本，如无意外是`1`
	 * - 与`keyAuth`一样是唯二的`getGachaLog`接口的必要参数
	 * @type {string}
	 */
	versionKeyAuth;


	/**
	 * 最初从`getGachaLog`接口获取跃迁记录的时间
	 * - 格式 `2023-08-10 12:34:56`
	 * @type {string}
	 */
	timeFetchFirst;
	/**
	 * 最后从`getGachaLog`接口获取跃迁记录的时间
	 * - 格式 `2023-08-10 12:34:56`
	 * @type {string}
	 */
	timeFetchLast;


	/**
	 * 已解锁的角色
	 * - 数据来自`mihomo.me`。有延迟，不保证准确
	 * - 开拓者有多命途但只算一个
	 * @type {number}
	 */
	sizeCharacter;
	/**
	 * 已解锁的成就数量
	 * - 数据来自`mihomo.me`。有延迟，不保证准确
	 * @type {number}
	 */
	countAchievement;
	/**
	 * 开拓者名称
	 * - 数据来自`mihomo.me`。有延迟，不保证准确
	 * @type {string}
	 */
	name;
	/**
	 * 开拓者等级
	 * @type {number}
	 */
	level;
	/**
	 * 开拓者均衡等级
	 * - 数据来自`mihomo.me`。有延迟，不保证准确
	 * @type {number}
	 */
	levelWorld;


	/**
	 * 跃迁记录合集
	 * @type {ParsedLog[]}
	 */
	logsParsed;
	/**
	 * 成就记录合集
	 * @type {Object<string, PlayerAchievementInfo>}
	 */
	infosAchievementPlayer$id;
}


export class ProfileAdmin {
	/**
	 *
	 * @type {Profile[]}
	 */
	profiles = [];

	/**
	 *
	 * @type {import('vue').Ref<Profile[]>}
	 */
	$profiles = ref(this.profiles);

	constructor() {
		this.load();
	}

	parse(profilesJSON) {
		const profiles = [];

		for(const profileJSON of profilesJSON) {
			const profile = new Profile();


			profile.id = profileJSON.id;
			profile.nick = profileJSON.nick;
			profile.uid = profileJSON.uid;
			profile.keyAuth = profileJSON.keyAuth;
			profile.versionKeyAuth = profileJSON.versionKeyAuth;
			profile.timeFetchFirst = profileJSON.timeFetchFirst;
			profile.timeFetchLast = profileJSON.timeFetchLast;
			profile.sizeCharacter = profileJSON.sizeCharacter;
			profile.countAchievement = profileJSON.countAchievement;
			profile.name = profileJSON.name;
			profile.level = profileJSON.level;
			profile.levelWorld = profileJSON.levelWorld;

			profile.logsParsed = [];
			for(const logParsedJSON of profileJSON.logsParsed) {
				const logParsed = new ParsedLog();

				logParsed.id = logParsedJSON.id;
				logParsed.item = logParsedJSON.item;
				logParsed.pool = logParsedJSON.pool;
				logParsed.time = logParsedJSON.time;

				profile.logsParsed.push(logParsed);
			}

			profile.infosAchievementPlayer$id = {};
			for(const id in profileJSON.infosAchievementPlayer$id) {
				const infoAchievementPlayerJSON = profileJSON.infosAchievementPlayer$id[id];

				const infoAchievementPlayer = new PlayerAchievementInfo();

				infoAchievementPlayer.id = infoAchievementPlayerJSON.id;
				infoAchievementPlayer.status = infoAchievementPlayerJSON.status;
				infoAchievementPlayer.shelved = infoAchievementPlayerJSON.shelved;
				infoAchievementPlayer.timeFinished = infoAchievementPlayerJSON.timeFinished;
				infoAchievementPlayer.timeShelved = infoAchievementPlayerJSON.timeShelved;

				profile.infosAchievementPlayer$id[id] = infoAchievementPlayer;
			}


			profiles.push(profile);
		}

		return profiles;
	}

	/**
	 *
	 * @param {*} param0
	 * @returns
	 */
	load({ willUpdateRef = true, willDryLoad = false } = {}) {
		let stringProfiles = localStorage.getItem('profiles');

		try {
			if(stringProfiles === null) { stringProfiles = '[]'; }

			const profilesJSON = JSON.parse(stringProfiles);
			if(!(profilesJSON instanceof Array)) { throw Error('校验档案集数据：数据类型不是[数组]'); }


			const profiles = this.parse(profilesJSON);


			if(!willDryLoad) { this.profiles = profiles; }
			if(willUpdateRef) { this.$profiles.value = profiles; return this.$profiles; }

			return this.profiles;
		}
		catch(error) {
			if(!willDryLoad) {
				const keyBackup = `profiles-${Day().format('YYMMDDHHmmss')}`;


				localStorage.setItem(`profiles-bad-${keyBackup}`, stringProfiles);

				localStorage.setItem('profiles', '[]');


				throw Error(`读取档案集：${error}\n  ● 数据已重置\n  ● 错误数据已备份到localStorage.profiles-bad-${keyBackup}`);
			}
			else {
				throw Error(`读取档案集：${error}`);
			}
		}
	}

	save() { localStorage.setItem('profiles', JSON.stringify(this.profiles)); }
}


export const PA = await new ProfileAdmin();
window.PA = PA;
