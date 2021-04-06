import { ADD_MESSAGE } from "./types";

export const messagesReducer = (state = {}, action) => {
	switch (action.type) {
		case ADD_MESSAGE: {
			// проверка что в чате уже есть сообщения. Без нее не работает конструкция ...state[action.payload.chatId]
			if (state[action.payload.chatId]) {
				return {
					...state,
					[action.payload.chatId]: [
						...state[action.payload.chatId],
						{ text: action.payload.text, author: action.payload.author, id: `${action.payload.chatId}_${state[action.payload.chatId].length}` },
					],
				};
			} else {
				return {
					...state,
					[action.payload.chatId]: [{ text: action.payload.text, author: action.payload.author, id: `${action.payload.chatId}_0` }],
				};
			}
		}

		default:
			return state;
	}
};
