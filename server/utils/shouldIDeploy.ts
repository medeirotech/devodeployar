import { getHoliday } from "@/features/holidays/getHoliday";
import getBrazilDate from "./getBrazilDate";

const shouldIDeploy = (date: Date = getBrazilDate()) => {
	const day = date.getDay();
	const isWeekend = !(day > 0 && day < 5);
	const { isHoliday } = getHoliday(date);
	return !(isWeekend || isHoliday);
};

export default shouldIDeploy;
