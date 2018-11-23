import React, { Component } from "react";
import ScheduleCard from "./presenter";

class Container extends Component {
  render() {
    return <ScheduleCard {...this.props} />;
  }
}
export default Container;
