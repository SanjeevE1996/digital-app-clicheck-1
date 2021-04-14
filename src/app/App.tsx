import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import { Login } from "./components/login/login";
import { IState } from "./intefaces";
import { OktaAuth } from "@okta/okta-auth-js";
import { oktaAuthConfig } from "./scripts/esure-env";
import { Security, LoginCallback } from "@okta/okta-react";

import { CliRecords } from "./components/cli-records/cli-records";

export const App: React.FC = () => {
  const oktaAuth = new OktaAuth(oktaAuthConfig);

  // @typescript-eslint/no-unused-vars
  const [oktaState, setOktaState] = useState({
    name: "sanjeev",
    oktaAuth: oktaAuth,
    restoreOriginalUri: window.location.origin + "/login/callback",
  } as IState);

  return (
    <Router>
      <Security
        oktaAuth={oktaState.oktaAuth}
        restoreOriginalUri={oktaState.restoreOriginalUri}
      >
        <Route exact path="/login/callback" component={LoginCallback} />
        <Route
          exact={true}
          path="/"
          render={(props) => (
            <Login
              {...props}
              name={oktaState.name}
              oktaAuth={oktaState.oktaAuth}
            ></Login>
          )}
        />
        {/* {this.state.oktaAuth.isAuthenticated() ? (
            <Route exact path="/records" component={CliRecords}></Route>
          ) : (
            <div>Auth failed! </div>
          )} */}
      </Security>
      <Route exact path="/records" component={CliRecords}></Route>
    </Router>
  );
};
