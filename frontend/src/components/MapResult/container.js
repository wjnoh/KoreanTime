import React, { Component } from "react";
import MapResult from "./presenter";

class Container extends Component {
  render() {
    return <MapResult {...this.props} />;
  }
}

export default Container;
