import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./home";
import Admin from './admin'
export default () => (
  <>
    <Switch>
      <Route path='/admin' component={Admin}/>
      <Route path="/" component={HomePage} />
    </Switch>
  </>
);
