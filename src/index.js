import React from "react";
import ReactDOM from "react-dom";
import "./style/main.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { createHashHistory } from "history";
import { createBrowserHistory } from "history";

import createAdminStore from "./createAdminStore";
import jsonServerProvider from "ra-data-json-server";
import auth from "./auth";
import authProvider from "./authProvider";

export const dataProvider = jsonServerProvider("http://localhost:5000");
export const history = createBrowserHistory();
console.log("http://localhost:5000/users");

ReactDOM.render(
  <React.StrictMode>
    <Provider
      store={createAdminStore({
        authProvider,
        dataProvider,
        history,
      })}
    >
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
