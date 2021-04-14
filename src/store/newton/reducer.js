import { GET_RESPONSE_FAILURE, GET_RESPONSE_REQUEST, GET_RESPONSE_SUCCESS } from "./types";

const InitialState = {
	response: [],
	request: {
		// loading: false,
		error: null,
	},
};

export const newtonReducer = (state = InitialState, action) => {
	switch (action.type) {
		// case GET_RESPONSE_REQUEST: {
		// 	return {
		// 		response: [],
		// 		request: {
		// 			loading: true,
		// 			error: null,
		// 		},
		// 	};
		// }

		case GET_RESPONSE_SUCCESS: {
			return {
				response: action.payload,
				request: {
					// loading: false,
					error: null,
				},
			};
		}

		case GET_RESPONSE_FAILURE: {
			return {
				response: [],
				request: {
					// loading: false,
					error: action.error,
				},
			};
		}

		default:
			return state;
	}
};
