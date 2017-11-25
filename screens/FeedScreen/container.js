import React, { Component } from "react";
import FeedScreen from "./presenter";

class Container extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return <FeedScreen navigate={navigate} />;
  }
}

export default Container;
