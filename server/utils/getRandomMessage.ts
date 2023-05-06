import { Message } from "./messages";

const getRandomMessage = (messages: Message[]) =>  messages[Math.floor(Math.random() * messages.length)];

export default getRandomMessage;