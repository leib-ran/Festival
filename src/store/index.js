import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import allReducers from "../reducer";
const middleAware = [thunk];
const initialState = {};

const store = createStore(
  allReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleAware))
);
export default store;
