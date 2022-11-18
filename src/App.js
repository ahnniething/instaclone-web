import { useReactiveVar } from "@apollo/client";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { isLoggedInVar } from "./apollo";
import Home from "./screens/Home";
import Login from "./screens/Login";
import NotFound from "./screens/NotFound";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          {isLoggedIn ? <Home /> : <Login />}
        </Route>
        <Route>
          {/* <Redirect to='/'></Redirect> */}
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
