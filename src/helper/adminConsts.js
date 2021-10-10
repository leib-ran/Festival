import { createBrowserHistory } from "history";
import jsonServerProvider from "ra-data-json-server";
import simpleRestProvider from "ra-data-simple-rest";

export const dataProvider = simpleRestProvider("http://localhost:8000");
export const history = createBrowserHistory();
