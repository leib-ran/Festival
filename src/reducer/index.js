import { combineReducers } from "redux";
import counterReducer from "./cartCounter";
import { itemHandlerReducer } from "./ItemHandler";

const allReducers = combineReducers({
  count: counterReducer,
  itemHandler: itemHandlerReducer,
});
export default allReducers;
