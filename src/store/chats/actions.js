import { removeChatMessages } from "../messages/actions";
import { ADD_CHAT, CHANGECLASS_CHAT, REMOVE_CHAT, WRITING_CHAT } from "./types";

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

// для анимации набора текста собеседником
export const writingChat = (chatId, isWriting) => ({
	type: WRITING_CHAT,
	payload: { id: chatId, isWriting: isWriting },
});

export const changeClassChatforBotResponse = (chatId) => (dispatch) => {
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
