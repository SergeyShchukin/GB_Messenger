import { ADD_MESSAGE, REMOVE_MESSAGE, REMOVE_CHAT_MESSAGES } from "./types";

export const messagesReducer = (state = {}, action) => {
	switch (action.type) {
		case ADD_MESSAGE: {
			let chatId = action.payload.chatId;

			let ind = 0; // требуется для того, чтобы после удаления сообщения не появлялось одинаковых ID
			while ((state[chatId] || []).map((mess) => mess.id).indexOf(`${chatId}_${state[chatId]?.length + ind}`) != -1) {
				ind = ind + 1;
			}

			return {
				...state,
				[chatId]: [...(state[chatId] || []), { text: action.payload.text, author: action.payload.author, id: `${chatId}_${state[chatId]?.length + ind || 0}` }],
			};
		}

		case REMOVE_MESSAGE: {
			return { ...state, [action.payload.split("_")[0]]: [...state[action.payload.split("_")[0]].filter((mess) => mess.id != action.payload)] };
		}

		case REMOVE_CHAT_MESSAGES: {
			delete state[action.payload];
			return { ...state };
		}

		default:
			return state;
	}
};
