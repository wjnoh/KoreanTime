import React, { Component } from "react";
import PartyCards from "./presenter";

class Container extends Component {
  render() {
    return <PartyCards {...this.props} />;
  }
}

export default Container;
