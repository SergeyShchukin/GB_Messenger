import { ADD_MESSAGE } from "./types";

export const addMessage = (chatId, text, author) => ({
	type: ADD_MESSAGE,
	payload: { chatId, text, author },
});
