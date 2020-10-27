import { SIGN_IN } from "../constants/ActionTypes";

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
          name: action.response.user.email,
          loggedIn: true,
        });
      return state;
    default:
      return state;
  }
}
