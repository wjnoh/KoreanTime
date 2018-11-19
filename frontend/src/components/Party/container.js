import React, { Component } from "react";
import Party from "./presenter";

class Container extends Component {
  render() {
    return <Party {...this.props} />;
  }
}

export default Container;
