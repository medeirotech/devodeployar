import { MessageType } from "./messages";

export const getRandomMessage = (messages: MessageType[]) =>  messages[Math.floor(Math.random() * messages.length)];