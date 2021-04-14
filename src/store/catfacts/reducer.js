import { GET_FACTS_FAILURE, GET_FACTS_REQUEST, GET_FACTS_SUCCESS } from "./types";

const InitialState = {
	facts: [],
	request: {
		loading: false,
		error: null,
	},
};

export const catFactsReducer = (state = InitialState, action) => {
	switch (action.type) {
		case GET_FACTS_REQUEST: {
			return {
				...state,
				request: {
					loading: true,
					error: null,
				},
			};
		}

		case GET_FACTS_SUCCESS: {
			return {
				facts: action.facts,
				request: {
					loading: false,
					error: null,
				},
			};
		}

		case GET_FACTS_FAILURE: {
			return {
				facts: [],
				request: {
					loading: false,
					error: action.error,
				},
			};
		}
		default:
			return state;
	}
};
