import React, { Component } from "react";
import ScheduleAdd from "./presenter";

class Container extends Component {
  render() {
    return <ScheduleAdd {...this.props} />;
  }
}

export default Container;
