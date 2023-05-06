import { Message } from "../utils/messages";

type Response = {
	emoji: string;
	message: string;
	shouldIDeploy: boolean;
}

export default defineEventHandler<Response>(() => {
	const timezoneOffset: number = 180 * 60 * 1000;
	const date: Date = new Date(Date.now() - timezoneOffset);
	const day: number = date.getDay();
	const message: Message = getRandomMessage(messages[getWeekday(day)]);

	return {
		emoji: message.emoji,
		message: message.message,
		shouldIDeploy: shouldIDeploy(day),
		timestamp: date.toISOString(),
	};
});
