import { CHANGE_PROFILE } from "./types";

const initialState = {
	firstname: "",
	lastname: "",
	email: "",
	gender: "Мужской",
	adress: "",
};

export const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_PROFILE: {
			return action.payload;
		}

		default:
			return state;
	}
};
