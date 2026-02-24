import { type Message, messages, holidayMessages } from "@/data/messages";
import { getHoliday } from "@/features/holidays/getHoliday";
import getBrazilDate from "@/server/utils/getBrazilDate";

type Response = {
	emoji: string;
	message: string;
	shouldIDeploy: boolean;
	timestamp: string;
};

export default defineEventHandler<Response>(() => {
	const date: Date = getBrazilDate();
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
