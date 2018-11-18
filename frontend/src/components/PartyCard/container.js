import React, { Component } from "react";
import PartyCard from "./presenter";

class Container extends Component {
  render() {
    return <PartyCard {...this.props} />;
  }
}

export default Container;
