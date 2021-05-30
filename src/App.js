import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import MainNav from "./components/MainNav";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <div className="h-screen w-screen">
        <Switch>
          <Route path="/main">
            <MainNav />
          </Route>
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
