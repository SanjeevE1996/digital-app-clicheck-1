import React from "react";
import { IComps } from "../../intefaces";
import "./cli-records.scss";
import * as Sentry from "@sentry/react";

export class CliRecords extends React.Component {
  constructor(props: {}) {
    super(props);

    this.state = {
      filterComp: false,
    } as IComps;
  }

  throwknownError = () => {
    throw new Error("this is a test error");
  };

  render() {
    return (
      <Sentry.ErrorBoundary fallback={"An error has occurred"}>
        <div>
          <section>
            <header className="records-header">CLI Records</header>
            <div className="records-canvas">
              <div className="records-container">
                <div className="records-card">
                  <div className="btn-container">
                    <button
                      className="filter-btn"
                      onClick={() => this.setState({ filterComp: true })}
                    >
                      Show Filters
                    </button>
                    <button className="number-btn">Add Number</button>
                  </div>
                  <div>CLI Records</div>
                  <div>Notes </div>
                  <button onClick={this.throwknownError}>
                    Break the world
                  </button>
                  ;
                </div>
              </div>
            </div>
          </section>
        </div>
      </Sentry.ErrorBoundary>
    );
  }
}
