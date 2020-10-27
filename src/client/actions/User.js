import axios from "axios";
import { SIGN_IN } from "../constants/ActionTypes";

export const signInRequest = (user) => (dispatch) => {
  dispatch({
    type: SIGN_IN,
  });
  // user.shortName = user.givenName
  //   .charAt(0)
  //   .concat(user.familyName)
  //   .toLowerCase();
  // if (!user.email.endsWith("@valeo.com")) {
  //   dispatch(signInFailure("Invalid login attempt!"));
  //   return;
  // }
  // axios
  //   .get(`http://google.com`)
  //   .then((response) => dispatch(signInSuccess(response.data)))
  //   .catch((err) => dispatch(signInFailure("Invalid login attempt!")));
  dispatch(signInSuccess({ user }));
};

export const signInSuccess = (resp) => ({
  type: SIGN_IN,
  status: "success",
  response: resp,
});
export const signInFailure = (err) => ({
  type: SIGN_IN,
  status: "error",
  error: err,
});
