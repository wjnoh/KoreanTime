import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "../Navigation";
import PartyCards from "../PartyCards";
import "./styles.scss";

const App = props => {
  return (
    <main className="main">
      <Switch>
        <Route
          path="/:category"
          render={({ match }) => <Navigation match={match} />}
        />
        <Route path="/" render={({ match }) => <Navigation match={match} />} />
      </Switch>
      <PartyCards />
    </main>
  );
};

export default App;
