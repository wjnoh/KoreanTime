import React, { Component } from "react";
import Navigation from "./presenter";

class Container extends Component {
  state = {
    isFindModalOpen: false
  };

  handleFindModalOpen = () => {
    this.setState({
      isFindModalOpen: true
    });
  };

  handleFindModalClose = () => {
    this.setState({
      isFindModalOpen: false
    });
  };

  render() {
    return (
      <Navigation
        {...this.state}
        {...this.props}
        handleFindModalOpen={this.handleFindModalOpen}
        handleFindModalClose={this.handleFindModalClose}
      />
    );
  }
}

export default Container;
