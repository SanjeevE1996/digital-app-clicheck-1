import React from "react";

import "./login.scss";
import avatar from "../../../assets/images/avatar.png";

import { IProps } from "../../intefaces";

export class Login extends React.Component<IProps, {}> {
  // eslint-disable-next-line
  constructor(props: IProps) {
    super(props);
    console.log(this.props);
  }

  public signIn() {
    this.props.oktaAuth.signInWithRedirect();
    this.props.oktaAuth.getAccessToken();
  }

  public logout() {
    alert("hello");
  }

  render() {
    return (
      <section className="is-main-color login-section">
        <div className="container">
          <div>
            <section className="box-login center">
              <figure className="img-center-holder">
                <img className="image-avatar" src={avatar} alt="avatar" />
              </figure>

              <div className="login-holder">
                {/* <div>{this.props.name}</div> */}
                {/* {!this.props.authState.isAuthenticated() ? (
                  <Button onClick={() => this.signIn()}>Sign in</Button>
                ) : (
                  <Button onClick={() => this.logout()}>Logout in</Button>
                )} */}

                <div className="name">{this.props.name}</div>
                <button className="btn-in" onClick={() => this.signIn()}>
                  Sign in
                </button>
              </div>
            </section>
          </div>
        </div>
      </section>
    );
  }
}
