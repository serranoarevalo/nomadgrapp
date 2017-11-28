import React, { Component } from "react";
import PropTypes from "prop-types";
import PhotoScreen from "./presenter";

class Container extends Component {
  static navigationOptions = {
    headerTitle: "Likes"
  };
  render() {
    return <PhotoScreen {...this.props} />;
  }
}

export default Container;
