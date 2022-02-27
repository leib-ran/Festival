import { createBrowserHistory, createHashHistory } from "history";
import jsonServerProvider from "ra-data-json-server";
import simpleRestProvider from "ra-data-simple-rest";
import { baseUrl } from "../core/consts";

export const dataProvider = simpleRestProvider(baseUrl);
export const history = createBrowserHistory();
