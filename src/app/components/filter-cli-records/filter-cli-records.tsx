import { Component } from "react";
import { IComps } from "../../intefaces";

export class FilterCliRecords extends Component<IComps, {}> {
  constructor(props: IComps) {
    super(props);

    console.log(props);
  }

  render() {
    return (
      <div>
        <div>
          {this.props.filterComp ? (
            <div>
              <h1>hello</h1>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
