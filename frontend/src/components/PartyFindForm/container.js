import React, { Component } from "react";
import PartyFindForm from "./presenter";

class Container extends Component {
  render() {
    return <PartyFindForm {...this.props} />;
  }
}

export default Container;
