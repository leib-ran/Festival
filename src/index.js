import React from "react";
import ReactDOM from "react-dom";
import "./style/main.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import createAdminStore from "./createAdminStore";

import authProvider from "./authProvider";
import { dataProvider, history } from "./helper/adminConsts";

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
