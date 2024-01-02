import { getHoliday } from "@/features/holidays/getHoliday";

const shouldIDeploy = (date: Date) => {
	const day = date.getDay();
	const isWeekend = !(day > 0 && day < 5);
	const { isHoliday } = getHoliday(date);
	return !(isWeekend || isHoliday);
};

export default shouldIDeploy;
