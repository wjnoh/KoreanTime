import React, { Component } from "react";
import Marker from "./presenter";

class Container extends Component {
  render() {
    return <Marker {...this.props} />;
  }
}

export default Container;
