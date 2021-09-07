import { combineReducers } from "redux";
import counterReducer from "./cartCounter";

const allReducers = combineReducers({
  count: counterReducer,
});
export default allReducers;
