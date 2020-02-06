import React from "react";
import ReactDOM from "react-dom";
import { LandingPage } from "./landingPage";
import { AppLayout } from "./appLayout";
import { ProtectedRoute } from "./protected.route";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { User } from './user.layout';
import { Driver } from './driver.layout';
import {EditUser} from './editUSer';
import {VerifyDriver} from './verifyDriver';
import {RechargeDriver} from './rechargeDriver';

// import { NavLink ,Prompt } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <ProtectedRoute exact path="/home"            component={AppLayout} />
        <ProtectedRoute exact path="/home/user"       component={User} />
        <ProtectedRoute exact path="/home/user/:id"   component={EditUser} />
        <ProtectedRoute exact path="/home/driver"     component={Driver} />
        <ProtectedRoute exact path="/home/driver/verify/:id" component={VerifyDriver}/>
        <ProtectedRoute exact path="/home/driver/recharge/:id" component={RechargeDriver}/>
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
