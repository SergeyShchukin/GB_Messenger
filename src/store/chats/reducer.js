import { ADD_CHAT } from "./types";

export const chatsReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_CHAT: {
			return [...state, { id: `chatId${state.length}`, name: action.payload }];
		}

		default:
			return state;
	}
};
