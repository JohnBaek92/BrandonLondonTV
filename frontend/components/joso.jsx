import React from "react";
import UnderConstruction from "./under_construction";

class Joso extends React.Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container">
        <UnderConstruction />
      </div>
    );
  }
}

export default Joso;
