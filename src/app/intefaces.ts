import { OktaAuth } from "@okta/okta-auth-js";

export interface IProps {
  name: string;
  oktaAuth: OktaAuth;
}

export interface IState {
  oktaAuth: OktaAuth;
  authState: OktaAuth;
  restoreOriginalUri: any;
  name: string;
}

export interface IComps {
  filterComp: boolean;
}
