import { ADD_CHAT } from "./types";

export const addChat = (chatName) => ({
	type: ADD_CHAT,
	payload: chatName,
});
