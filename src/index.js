import React from "react";
import ReactDOM from "react-dom";
import { LandingPage } from "./landingPage";
import { AppLayout } from "./appLayout";
import { ProtectedRoute } from "./protected.route";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { NavLink ,Prompt } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <ProtectedRoute exact path="/app" component={AppLayout} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
