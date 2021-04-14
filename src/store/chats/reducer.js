import { RESERVED_CHAT } from "../../utils/constants";
import { ADD_CHAT, CHANGECLASS_CHAT, REMOVE_CHAT, WRITING_CHAT } from "./types";

const initialState = [{ id: RESERVED_CHAT, name: "Ньютон", className: "", isWriting: false }];

export const chatsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_CHAT: {
			let ind = 0; // требуется для того, чтобы после удаления чатов не появлялось одинаковых ID
			while (state.map((chat) => chat.id).indexOf(`chatId${state.length + ind}`) != -1) {
				ind = ind + 1;
			}
			return [...state, { id: `chatId${state.length + ind}`, name: action.payload, className: "", isWriting: false }];
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

		case WRITING_CHAT: {
			return state.map((chat) => {
				if (chat.id == action.payload.id) chat.isWriting = action.payload.isWriting;
				return chat;
			});
		}

		default:
			return state;
	}
};
