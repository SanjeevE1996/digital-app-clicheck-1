/* Local Development Variables */
// eslint-disable-next-line
/* global window */

export const EsureEnv = {
  XAPI_URL: "http://localhost:3031/clicheck-xapi",
  API_KEY: "lk1ja4459s3thjf0fsqd94v56b8r2he3",
  OKTA_CLIENT_ID: "0oa21o3u3oqcZ4E2n0i7",
  OKTA_REDIRECT_URI: "http://localhost:3301/login/callback",
  OKTA_DOMAIN: "https://esure.okta-emea.com/oauth2/default",
  SITE_CAT_ACCOUNT: "esuredev",
  ESURE_CONSUMER_KEY: "7970ab41f8534418b076e3ee7eb9e477",
  VERSION: "Only available when the build is done through Travis",
};

export const oktaAuthConfig = {
  issuer: EsureEnv.OKTA_DOMAIN,
  clientId: EsureEnv.OKTA_CLIENT_ID,
  redirectUri: EsureEnv.OKTA_REDIRECT_URI,
  scope: ["openid", "profile", "email"],
};
// https://esure.okta-emea.com/home/oidc_client/0oa21o3u3oqcZ4E2n0i7/aln2ysuixJR74D7Lc0g6?fromHome=true
