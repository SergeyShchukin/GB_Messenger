import { GET_FACTS_FAILURE, GET_FACTS_REQUEST, GET_FACTS_SUCCESS } from "./types";
import { API } from "../../utils/constants";

const getFactsRequest = () => ({
	type: GET_FACTS_REQUEST,
});

const getFactsSuccess = (facts) => ({
	type: GET_FACTS_SUCCESS,
	facts,
});

const getFactsFailure = (error) => ({
	type: GET_FACTS_FAILURE,
	error,
});

export const getFacts = () => async (dispatch) => {
	try {
		dispatch(getFactsRequest());

		const res = await fetch(API.CAT_FACTS);

		if (!res.ok) {
			throw new Error(`Request failed: ${res.statusText} (${res.status})`);
		}

		const result = await res.json();

		dispatch(getFactsSuccess(result));
	} catch (err) {
		console.log(err);
		dispatch(getFactsFailure(err));
	}
};
