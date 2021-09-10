import { combineReducers } from "redux";
import counterReducer from "./cartCounter";
import { heightReducer } from "./heightReducer";
import { itemHandlerReducer } from "./ItemHandler";
import { widthFilterSortModalReducer } from "./widthfilterReducer";

const allReducers = combineReducers({
  count: counterReducer,
  itemHandler: itemHandlerReducer,
  heightHandler: heightReducer,
  widthFilterSortModal: widthFilterSortModalReducer,
});
export default allReducers;
