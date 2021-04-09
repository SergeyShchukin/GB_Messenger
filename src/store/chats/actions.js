import { removeChatMessages } from "../messages/actions";
import { ADD_CHAT, CHANGECLASS_CHAT, REMOVE_CHAT } from "./types";

export const addChat = (chatName) => ({
	type: ADD_CHAT,
	payload: chatName,
});

export const changeClassChat = (chatId, className) => ({
	type: CHANGECLASS_CHAT,
	payload: { chatId, className },
});

export const removeChat = (chatId) => ({
	type: REMOVE_CHAT,
	payload: chatId,
});

export const changeChatClassforBotResponse = (chatId) => (dispatch) => {
	dispatch(changeClassChat(chatId, "chatforBotResponse"));
	let timeout = setTimeout(() => {
		dispatch(changeClassChat(chatId, ""));
	}, 1000);
	return () => clearTimeout(timeout);
};

export const removeChatWithMessages = (chatId) => (dispatch) => {
	dispatch(removeChat(chatId));
	dispatch(removeChatMessages(chatId));
};
