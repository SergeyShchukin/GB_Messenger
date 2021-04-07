import { ADD_MESSAGE } from "./types";

export const messagesReducer = (state = {}, action) => {
	switch (action.type) {
		case ADD_MESSAGE: {
			return {
				...state,
				[action.payload.chatId]: [
					...(state[action.payload.chatId] || []),
					{ text: action.payload.text, author: action.payload.author, id: `${action.payload.chatId}_${state[action.payload.chatId]?.length || 0}` },
				],
			};
		}

		default:
			return state;
	}
};
