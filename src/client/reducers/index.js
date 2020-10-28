import { combineReducers } from "redux";
import user from "./User";
import resize from "./Resize";

const App = combineReducers({
  user,
  resize,
});

export default App;
