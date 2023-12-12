export const isChristmas = (date: Date) => {
	if (
		date.getMonth() === 11 &&
		(date.getDate() === 12 || date.getDate() === 25)
	)
		return "christmas";
};

export const isNewYear = (date: Date) => {
	if (
		(date.getMonth() === 11 && date.getDate() === 31) ||
		(date.getMonth() === 0 && date.getDate() === 1)
	)
		return "newYear";
};
