import { getHoliday } from "@/features/holidays/getHoliday";

const timezoneOffset: number = 180 * 60 * 1000;
// default parameter for cases where the date isn't passed to the method
const now: Date = new Date(Date.now() - timezoneOffset);

const shouldIDeploy = (date: Date = now) => {
	const day = date.getDay();
	const isWeekend = !(day > 0 && day < 5);
	const { isHoliday } = getHoliday(date);
	return !(isWeekend || isHoliday);
};

export default shouldIDeploy;
