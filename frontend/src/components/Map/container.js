import React, { Component } from "react";
import Map from "./presenter";

class Container extends Component {
  state = {
    mapInfoOpen: true
  };

  openMapInfo = () => {
    this.setState({
      mapInfoOpen: true
    });
  };

  closeMapInfo = () => {
    this.setState({
      mapInfoOpen: false
    });
  };

  render() {
    return (
      <Map
        {...this.state}
        {...this.props}
        openMapInfo={this.openMapInfo}
        closeMapInfo={this.closeMapInfo}
      />
    );
  }
}

export default Container;
