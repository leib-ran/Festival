import { createBrowserHistory } from "history";
import jsonServerProvider from "ra-data-json-server";

export const dataProvider = jsonServerProvider("http://localhost:5000");
export const history = createBrowserHistory();
