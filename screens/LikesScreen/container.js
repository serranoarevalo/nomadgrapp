import React, { Component } from "react";
import PropTypes from "prop-types";
import LikesScreen from "./presenter";

class Container extends Component {
  static navigationOptions = {
    headerTitle: "Likes"
  };
  render() {
    return <LikesScreen {...this.props} />;
  }
}

export default Container;
