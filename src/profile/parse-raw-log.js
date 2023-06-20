import Day from '../lib/day.pure.js';



export const hourToTimezone = numberHour => {
	const symbol = numberHour > 0 ? '+' : '-';

	numberHour = Math.abs(numberHour);

	const hour = parseInt(numberHour / 1);

	const minute = parseInt((numberHour - (hour * 1)) / Math.pow(60, -1));


	return `${symbol}${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
};

const parseRawLog = (logRaw, timezone) => {
	return {
		id: logRaw.id,
		item: logRaw.item_id,
		pool: logRaw.gacha_id,
		type: logRaw.gacha_type,
		time: Day(`${logRaw.time} ${hourToTimezone(timezone)}`, 'YYYY-MM-DD HH:mm:ss Z').unix()
	};
};



export default parseRawLog;
