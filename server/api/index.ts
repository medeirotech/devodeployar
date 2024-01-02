import { Message, messages, holidayMessages } from "@/data/messages";
import { getHoliday } from "@/features/holidays/getHoliday";

type Response = {
	emoji: string;
	message: string;
	shouldIDeploy: boolean;
	timestamp: string;
};

export default defineEventHandler<Response>(() => {
	const timezoneOffset: number = 180 * 60 * 1000;
	const date: Date = new Date(Date.now() - timezoneOffset);
	const day: number = date.getDay();
	const { isHoliday, holiday } = getHoliday(date);
	const message: Message = getRandomMessage(
		isHoliday ? holidayMessages[holiday] : messages[getWeekday(day)]
	);

	return {
		emoji: message.emoji,
		message: message.message,
		shouldIDeploy: shouldIDeploy(date),
		timestamp: date.toISOString(),
	};
});
