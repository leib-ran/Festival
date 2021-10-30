import { adminReducer } from "ra-core";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import counterReducer from "./cartCounter";
import { itemHandlerReducer } from "./ItemHandler";
import { heightReducer } from "./heightReducer";
import { widthFilterSortModalReducer } from "./widthfilterReducer";
import { paginationReducer } from "./pagination";
import { categoryReducer } from "./categoryReducer";
import { subCategoryReducer } from "./subcategory";
import { sorttypeReducer } from "./sortReducer";
import { modalFestivalReducer } from "./modalFestivalReducer";
import { festivalReducer } from "./festivalReducer";
import { userGlobalState } from "./userGlobalState";
import { buttonLoginSignUpReducer } from "./buttonLoginSignUpReducer";
import { mapReducer } from "./mapReducer";
import { history } from "../helper/adminConsts";

const allReducers = combineReducers({
  admin: adminReducer,
  router: connectRouter(history),
  count: counterReducer,
  itemHandler: itemHandlerReducer,
  heightHandler: heightReducer,
  widthFilterSortModal: widthFilterSortModalReducer,
  pagination: paginationReducer,
  categoryname: categoryReducer,
  subCategory: subCategoryReducer,
  sorttype: sorttypeReducer,
  mapUpdate: mapReducer,
  modalFestival: modalFestivalReducer,
  festivalChosen: festivalReducer,
  userGlobalState: userGlobalState,
  isSignIn: buttonLoginSignUpReducer,
});
export default allReducers;
