import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { StartPage } from "./views/startPage/startPage";
import { ApplePage } from "./views/applePage/applePage";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <StartPage />
        </Route>
        <Route path="/applePage">
          <ApplePage />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
