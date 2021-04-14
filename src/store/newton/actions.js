import { GET_RESPONSE_FAILURE, GET_RESPONSE_REQUEST, GET_RESPONSE_SUCCESS } from "./types";
import { API, AUTHORS, RESERVED_CHAT } from "../../utils/constants";
import { addMessage } from "../messages/actions";
import { changeClassChatforBotResponse, writingChat } from "../chats/actions";

// const getResponseRequest = () => ({
// 	type: GET_RESPONSE_REQUEST,
// });
const getResponseSuccess = (response) => ({
	type: GET_RESPONSE_SUCCESS,
	payload: response,
});
const getResponseFailure = (error) => ({
	type: GET_RESPONSE_FAILURE,
	error,
});

export const NewtonResponse = (text) => async (dispatch) => {
	try {
		// dispatch(getResponseRequest());

		const res = await fetch(API.CHAT_WITH_NEWTON + text);
		const response = await res.json();

		dispatch(getResponseSuccess(response));
		dispatch(addMessage(RESERVED_CHAT, response.message, AUTHORS.BOT_NEWTON));
		dispatch(changeClassChatforBotResponse(RESERVED_CHAT));
	} catch (err) {
		console.log(err);
		dispatch(getResponseFailure(err));
	} finally {
		dispatch(writingChat(RESERVED_CHAT, false));
	}
};
