import React, { Component } from "react";
import PartyCards from "./presenter";

class Container extends Component {
  state = {
    isPartyModalOpen: true
  };

  handlePartyModalOpen = () => {
    this.setState({
      isPartyModalOpen: true
    });
  };

  handlePartyModalClose = () => {
    this.setState({
      isPartyModalOpen: false
    });
  };

  render() {
    return (
      <PartyCards
        {...this.state}
        {...this.props}
        handlePartyModalOpen={this.handlePartyModalOpen}
        handlePartyModalClose={this.handlePartyModalClose}
      />
    );
  }
}

export default Container;
