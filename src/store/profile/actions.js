import { CHANGE_PROFILE } from "./types";

export const changeProfile = (profile) => ({
	type: CHANGE_PROFILE,
	payload: profile,
});
