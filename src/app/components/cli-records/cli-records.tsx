import React, { useState } from "react";
import { IComps } from "../../intefaces";
import "./cli-records.scss";
import * as Sentry from "@sentry/react";

export const CliRecords: React.FC<IComps> = () => {
  const [filterComp, setFilterComp] = useState({
    filterComp: false,
  } as IComps);

  console.log(filterComp);

  const throwknownError = () => {
    throw new Error("Sentry test error");
  };

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
                    onClick={() => setFilterComp({ filterComp: true })}
                  >
                    Show Filters
                  </button>
                  <button className="number-btn">Add Number</button>
                </div>
                <div>CLI Records</div>
                <div>Notes </div>
                <button onClick={throwknownError}>Break the world</button>;
              </div>
            </div>
          </div>
        </section>
      </div>
    </Sentry.ErrorBoundary>
  );
};
