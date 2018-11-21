import React, { Component } from "react";
import PartyForm from "./presenter";

class Container extends Component {
  render() {
    return <PartyForm {...this.props} />;
  }
}

export default Container;
