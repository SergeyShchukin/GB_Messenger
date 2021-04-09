import { ADD_CHAT, CHANGECLASS_CHAT, REMOVE_CHAT } from "./types";

export const chatsReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_CHAT: {
			let ind = 0; // требуется для того, чтобы после удаления чатов не появлялось одинаковых ID
			while (state.map((chat) => chat.id).indexOf(`chatId${state.length + ind}`) != -1) {
				ind = ind + 1;
			}
			return [...state, { id: `chatId${state.length + ind}`, name: action.payload, className: "" }];
		}

		case CHANGECLASS_CHAT: {
			return state.map((chat) => {
				if (chat.id == action.payload.chatId) chat.className = action.payload.className;
				return chat;
			});
		}

		case REMOVE_CHAT: {
			return state.filter((chat) => chat.id != action.payload);
		}

		default:
			return state;
	}
};
