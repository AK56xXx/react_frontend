import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import MainNav from "./components/MainNav";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <Router>
      <div className="h-screen w-screen">
        <Switch>
          <PrivateRoute path="/main" component={MainNav}/>
         
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
