import axios from "axios";
import { SIGN_IN, VALIDATE_USER } from "../constants/ActionTypes";
import Cookies from "js-cookie";

export const validateUserRequest = () => (dispatch) => {
  dispatch({
    type: VALIDATE_USER,
  });

  const user = Cookies.get("authCookie");
  if (user) dispatch(validateUserSuccess(user));
  else dispatch(validateUserFailure("no user found!"));
};

export const validateUserSuccess = (resp) => ({
  type: VALIDATE_USER,
  status: "success",
  response: resp,
});

export const validateUserFailure = (err) => ({
  type: VALIDATE_USER,
  status: "error",
  error: err,
});

export const signInRequest = (user) => (dispatch) => {
  dispatch({
    type: SIGN_IN,
  });

  axios
    .post(`/api/login`, user)
    .then((response) => {
      console.log(response);
      dispatch(signInSuccess(response.data));
    })
    .catch((err) => dispatch(signInFailure("Invalid login attempt!")));
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
