import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "../Navigation";
import PartyCards from "../PartyCards";
import Footer from "../Footer";
import Party from "../Party";
import Map from "../Map";
import "./styles.scss";

const App = props => {
  return (
    <>
      <Route path="/" render={({ match }) => <Navigation match={match} />} />
      <main className="main">
        <Route
          exact
          path="/"
          render={() => {
            return <PartyCards />;
          }}
        />
        <Switch>
          <Route
            path="/party/:partyId/map/:mapId"
            render={() => {
              return <Map />;
            }}
          />
          <Route
            path="/party/:partyId"
            render={() => {
              return <Party />;
            }}
          />
          <Route
            path="/party"
            render={() => {
              return <PartyCards />;
            }}
          />
        </Switch>
      </main>
      <Footer />
    </>
  );
};

export default App;
