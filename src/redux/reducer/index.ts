import { combineReducers } from "redux";
import stateReducer from "./stateReducer";

export default combineReducers({
  state: stateReducer,
});
