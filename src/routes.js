import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/home";


const Routes = () => (
  <Switch>
    <Route exact path="/home">
      <Home />
    </Route>
    <Route path="/">
      <Redirect to={"/home"} />
    </Route>
  </Switch>
)

export default Routes;
