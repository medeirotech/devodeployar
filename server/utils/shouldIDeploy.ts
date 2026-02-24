import { getHoliday } from "@/features/holidays/getHoliday";

const timezoneOffset: number = 180 * 60 * 1000;

const shouldIDeploy = (date: Date = new Date(Date.now() - timezoneOffset)) => {
	const day = date.getDay();
	const isWeekend = !(day > 0 && day < 5);
	const { isHoliday } = getHoliday(date);
	return !(isWeekend || isHoliday);
};

export default shouldIDeploy;
