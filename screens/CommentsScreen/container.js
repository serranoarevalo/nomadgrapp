import React, { Component } from "react";
import PropTypes from "prop-types";
import CommentsScreen from "./presenter";

class Container extends Component {
  render() {
    return <CommentsScreen {...this.props} />;
  }
}

export default Container;
