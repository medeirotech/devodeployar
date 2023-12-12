import { getHoliday } from "@/features/holidays/getHoliday";

const shouldIDeploy = (date: Date) => {
	const day = date.getDay();
	return (day > 0 && day < 5) || !getHoliday(date).isHoliday;
};

export default shouldIDeploy;
