import React from "react";

import "./login.scss";
import avatar from "../../../assets/images/avatar.png";

import { IProps } from "../../intefaces";

export const Login: React.FC<IProps> = (props: IProps) => {
  const signIn = () => {
    return alert("hello");
  };

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

              <div className="name">{props.name}</div>
              <button className="btn-in" onClick={() => signIn()}>
                Sign in
              </button>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};
