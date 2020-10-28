import { SIGN_IN, VALIDATE_USER } from "../constants/ActionTypes";

export default function userReducer(
  state = {
    name: "Guest",
    loggedIn: false,
  },
  action
) {
  switch (action.type) {
    case SIGN_IN:
      if (!action.status) return state;
      else if (action.status === "success")
        return Object.assign({}, state, {
          name: action.response,
          loggedIn: true,
        });
      return state;
    case VALIDATE_USER:
      if (!action.status) return state;
      else if (action.status === "success")
        return Object.assign({}, state, {
          name: action.response,
          loggedIn: true,
        });
      return state;
    default:
      return state;
  }
}
