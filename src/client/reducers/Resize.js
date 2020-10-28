import { RESIZE } from "../constants/ActionTypes";

export default function ResizeReducer(
  state = {
    img: null,
  },
  action
) {
  switch (action.type) {
    case RESIZE:
      if (!action.status) return state;
      else if (action.status === "success")
        return Object.assign({}, state, {
          img: action.response.name,
        });
      return state;
    default:
      return state;
  }
}
