import { SET_AUTH_TOKEN } from "../actions";

const auth = (state = {}, action) => {
  switch (action.type) {
    case SET_AUTH_TOKEN:
      return Object.assign({}, state, { authToken: action.authToken });
    default:
      return state;
  }
};

export default auth;
