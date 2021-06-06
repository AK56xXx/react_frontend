import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Stages from "../pages/Stages";
import Visites from "../pages/Visites";
import Propositions from "../pages/Propositions";
import Appointement from "../pages/Appointement";
import Header from "./Header";
import Home from "../pages/Home";
import Depots from "../pages/Depots";
import Calendar from "../pages/Calendar";
import Messagerie from "../pages/Messagerie";
const MainNav = () => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <Header />
      <Switch>
        <Route path={`${path}/rendezvous`}>
          <Appointement />
        </Route>
        <Route path={`${path}/proposition`}>
          <Propositions />
        </Route>
        <Route path={`${path}/visite`}>
          <Visites />
        </Route>
        <Route path={`${path}/stages`}>
          <Stages />
        </Route>
        <Route path={`${path}/depot`}>
          <Depots />
        </Route>
        <Route path={`${path}/calender`}>
          <Calendar />
        </Route>
        <Route path={`${path}/messagerie`}>
          <Messagerie />
        </Route>
        <Route path={`${path}/`}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default MainNav;
