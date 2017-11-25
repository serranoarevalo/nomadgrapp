import React, { Component } from "react";
import PropTypes from "prop-types";
import LikesScreen from "./presenter";

class Container extends Component {
  render() {
    return <LikesScreen {...this.props} />;
  }
}

export default Container;
