export const SET_AUTH_TOKEN = "SET_AUTH_TOKEN";

export const setAuthToken = authToken => ({
  type: SET_AUTH_TOKEN,
  authToken
});
