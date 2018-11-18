import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "../Navigation";
import "./styles.scss";

const App = props => {
  return (
    <div>
      <Switch>
        <Route
          path="/:category"
          render={({ match }) => <Navigation match={match} />}
        />
        <Route path="/" render={({ match }) => <Navigation match={match} />} />
      </Switch>
    </div>
  );
};

export default App;
