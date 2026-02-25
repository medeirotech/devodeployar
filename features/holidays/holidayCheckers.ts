// Meeus/Jones/Butcher algorithm — returns Easter Sunday for a given year
const getEasterDate = (year: number): { month: number; day: number } => {
	const a = year % 19;
	const b = Math.floor(year / 100);
	const c = year % 100;
	const d = Math.floor(b / 4);
	const e = b % 4;
	const f = Math.floor((b + 8) / 25);
	const g = Math.floor((b - f + 1) / 3);
	const h = (19 * a + b - d - g + 15) % 30;
	const i = Math.floor(c / 4);
	const k = c % 4;
	const l = (32 + 2 * e + 2 * i - h - k) % 7;
	const m = Math.floor((a + 11 * h + 22 * l) / 451);
	const month = Math.floor((h + l - 7 * m + 114) / 31) - 1; // 0-indexed
	const day = ((h + l - 7 * m + 114) % 31) + 1;
	return { month, day };
};

export const isEaster = (date: Date) => {
	const { month, day } = getEasterDate(date.getFullYear());
	if (date.getMonth() === month && date.getDate() === day) return "easter";
};

export const isIndependenceDay = (date: Date) => {
	if (date.getMonth() === 8 && date.getDate() === 7) return "independenceDay";
}

export const isChristmas = (date: Date) => {
	if (
		date.getMonth() === 11 &&
		(date.getDate() === 24 || date.getDate() === 25)
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

