import { ADD_MESSAGE, REMOVE_MESSAGE, REMOVE_CHAT_MESSAGES } from "./types";
import { AUTHORS } from "../../utils/constants";
import { changeChatClassforBotResponse } from "../chats/actions";

export const addMessage = (chatId, text, author) => ({
	type: ADD_MESSAGE,
	payload: { chatId, text, author },
});

export const removeMessage = (messageId) => ({
	type: REMOVE_MESSAGE,
	payload: messageId,
});

export const removeChatMessages = (chatId) => ({
	type: REMOVE_CHAT_MESSAGES,
	payload: chatId,
});

export const botResponse = (chatId, text, author) => (dispatch) => {
	let timeout;
	dispatch(addMessage(chatId, text, author));
	if (author == AUTHORS.user) {
		timeout = setTimeout(() => {
			dispatch(addMessage(chatId, "Напиши мне что-то интереснее...", AUTHORS.BOT));
			dispatch(changeChatClassforBotResponse(chatId));
		}, 1000);
	}
	return () => clearTimeout(timeout);
};
