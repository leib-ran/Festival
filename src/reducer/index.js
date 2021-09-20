import { combineReducers } from "redux";
import counterReducer from "./cartCounter";
import { heightReducer } from "./heightReducer";
import { itemHandlerReducer } from "./ItemHandler";
import { paginationReducer } from "./pagination";
import { widthFilterSortModalReducer } from "./widthfilterReducer";

const allReducers = combineReducers({
  count: counterReducer,
  itemHandler: itemHandlerReducer,
  heightHandler: heightReducer,
  widthFilterSortModal: widthFilterSortModalReducer,
  pagination: paginationReducer,
});
export default allReducers;
