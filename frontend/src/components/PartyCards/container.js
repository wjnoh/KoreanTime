import React, { Component } from "react";
import PartyCards from "./presenter";

class Container extends Component {
  state = {
    isPartyModalOpen: false
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

  componentDidMount = () => {
    window.scrollTo(0, 0);
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
