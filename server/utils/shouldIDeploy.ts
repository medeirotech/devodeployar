import { getHoliday } from "@/features/holidays/getHoliday";

const shouldIDeploy = (date: Date) => {
	const day = date.getDay();
	return !getHoliday(date).isHoliday ?? (day > 0 && day < 5);
};

export default shouldIDeploy;
