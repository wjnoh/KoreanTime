import React, { Component } from "react";
import Footer from "./presenter";

class Container extends Component {
  render() {
    return <Footer {...this.props} />;
  }
}

export default Container;
