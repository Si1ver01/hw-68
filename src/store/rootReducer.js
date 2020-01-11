import { combineReducers } from "redux";
import todoReducer from "./reducer";
import counterReducer from "./counterReducer";

export default combineReducers({
  todo: todoReducer,
  counter: counterReducer
});
