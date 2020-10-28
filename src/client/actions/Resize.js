import axios from "axios";
import { RESIZE } from "../constants/ActionTypes";

export const resizeRequest = (image) => (dispatch) => {
  dispatch({
    type: RESIZE,
  });

  axios
    .post(`/api`, image, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => dispatch(resizeSuccess(response.data)))
    .catch((err) => dispatch(resizeFailure("failed resize attempt!")));
};

export const resizeSuccess = (resp) => ({
  type: RESIZE,
  status: "success",
  response: resp,
});
export const resizeFailure = (err) => ({
  type: RESIZE,
  status: "error",
  error: err,
});
