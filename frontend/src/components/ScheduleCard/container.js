import React, { Component } from "react";
import ScheduleCard from "./presenter";

class Container extends Component {
  state = {
    isResultModalOpen: false
  };

  handleResultModalOpen = () => {
    this.setState({
      isResultModalOpen: true
    });
  };

  handleResultModalClose = () => {
    this.setState({
      isResultModalOpen: false
    });
  };

  render() {
    return (
      <ScheduleCard
        {...this.state}
        {...this.props}
        handleResultModalOpen={this.handleResultModalOpen}
        handleResultModalClose={this.handleResultModalClose}
      />
    );
  }
}
export default Container;
