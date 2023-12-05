import { MessageType } from "@/data/messages";

const getRandomMessage = (messages: MessageType[]) =>
	messages[Math.floor(Math.random() * messages.length)];

export default getRandomMessage;
