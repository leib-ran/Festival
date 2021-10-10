import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { routerMiddleware, connectRouter } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import { all, fork } from "redux-saga/effects";
import { adminReducer, adminSaga, USER_LOGOUT } from "react-admin";
import allReducers from "./reducer";
import counterReducer from "./reducer/cartCounter";
import { itemHandlerReducer } from "./reducer/ItemHandler";
import { heightReducer } from "./reducer/heightReducer";
import { widthFilterSortModalReducer } from "./reducer/widthfilterReducer";
import { paginationReducer } from "./reducer/pagination";
import { categoryReducer } from "./reducer/categoryReducer";
import { subCategoryReducer } from "./reducer/subcategory";
import { sorttypeReducer } from "./reducer/sortReducer";
import { mapReducer } from "../src/reducer/mapReducer";
import { modalFestivalReducer } from "./reducer/modalFestivalReducer";
import { festivalReducer } from "./reducer/festivalReducer";
import { userGlobalState } from "./reducer/userGlobalState";
import { buttonLoginSignUpReducer } from "./reducer/buttonLoginSignUpReducer";

export default ({ authProvider, dataProvider, history }) => {
  const reducer = combineReducers({
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
  const resettableAppReducer = (state, action) =>
    reducer(action.type !== USER_LOGOUT ? state : undefined, action);

  const saga = function* rootSaga() {
    yield all([adminSaga(dataProvider, authProvider)].map(fork));
  };
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers =
    (process.env.NODE_ENV === "development" &&
      typeof window !== "undefined" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true,
        traceLimit: 25,
      })) ||
    compose;

  const store = createStore(
    resettableAppReducer,

    composeEnhancers(
      applyMiddleware(sagaMiddleware, routerMiddleware(history))
      // add your own enhancers here
    )
  );
  sagaMiddleware.run(saga);
  return store;
};