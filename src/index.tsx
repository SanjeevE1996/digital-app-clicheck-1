import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app/App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

Sentry.init({
  dsn:
    "https://9b28367445a740eaad8589fe7de3bd90@o569965.ingest.sentry.io/5716351",
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

// const SentryWebpackPlugin = require("@sentry/webpack-plugin");

// export default SentryWebpackPlugin = {
//   // other configuration
//   configureWebpack: {
//     plugins: [
//       new SentryWebpackPlugin({
//         // sentry-cli configuration
//         authToken: "bcbc8b669c6511ebbde9eafd63ef295d",
//         org: "mr-lxk",
//         project: "mr-lxk",
//         release: process.env.SENTRY_RELEASE,

//         // webpack specific configuration
//         include: ".",
//         ignore: ["node_modules", "webpack.config.js"],
//       }),
//     ],
//   },
// };

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
