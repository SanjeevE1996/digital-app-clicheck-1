import { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import { Login } from "./components/login/login";
import { IState } from "./intefaces";
import { OktaAuth } from "@okta/okta-auth-js";
import { oktaAuthConfig } from "./scripts/esure-env";
import { Security, LoginCallback } from "@okta/okta-react";

import { CliRecords } from "./components/cli-records/cli-records";

export class App extends Component<{}, IState> {
  oktaAuth: OktaAuth;

  constructor(props: {}) {
    super(props);

    this.oktaAuth = new OktaAuth(oktaAuthConfig);

    this.state = {
      oktaAuth: this.oktaAuth,
      name: "Sanjeev",
      restoreOriginalUri: window.location.origin + "/login/callback",
    } as IState;

    console.log(this.state);
  }

  render() {
    return (
      <Router>
        <Security
          oktaAuth={this.state.oktaAuth}
          restoreOriginalUri={this.state.restoreOriginalUri}
        >
          <Route exact path="/login/callback" component={LoginCallback} />
          <Route
            exact={true}
            path="/"
            render={(props) => (
              <Login
                {...props}
                name={this.state.name}
                oktaAuth={this.state.oktaAuth}
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
  }
}

// https://esure.okta-emea.com/oauth2/default/v1/authorize?client_id=0oa21o3u3oqcZ4E2n0i7&redirect_uri=http%3A%2F%2Flocalhost%3A3301%2Fimplicit%2Fcallback&response_type=id_token
// %20token&response_mode=fragment&state=we9ksSl5xc0Dtixz1D24yLVqcMVNcvsXARG0NJvZDtVw6gPU3YCxbz79ng3IM2EA&nonce=6HFj1CL43uMMsMjKzXRnyppO0NxVvp2LgULPNluIzU6fE6RnU7vMrnJCwt6lB3t4&scope=openid%20email%20profile%20address%20phone

// https://esure.okta-emea.com/oauth2/default/v1/authorize?client_id=0oa21o3u3oqcZ4E2n0i7&code_challenge=YTYvqal12BE7qpvVQD_x01ObNCK8cJat8sz-PBEDkj0&code_challenge_method=S256&nonce
// =MvGaCDsotLdND8tiVQ721WFUdBE5LlpGY73bqAQjBzklxi2sY12Z0J4tMzjY6rqS&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flogin%2Fcallback&response_type=code&state=Cf2jZJUboAqbCb0Bh1Qu4y5REhJyuefBsSdODoV8nsQkf8tYbOReir9XRQQgKjAe&scope=openid%20email%20profile
