import { isChristmas, isIndependenceDay, isNewYear } from "./holidayCheckers";

const callHolidayCheckersByMonth = (date: Date) => {
	const month = date.getMonth();
	const holidaysByMonth: { [key: number]: string | undefined } = {
		0: isNewYear(date),
		8: isIndependenceDay(date),
		11: isChristmas(date) || isNewYear(date),
	};

	return holidaysByMonth[month];
};

export const getHoliday = (date: Date) => {
	const holiday = callHolidayCheckersByMonth(date);
	return {
		isHoliday: !!holiday,
		holiday: holiday || "",
	}
};