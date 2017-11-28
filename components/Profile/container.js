import React, { Component } from "react";
import PropTypes from "prop-types";
import Profile from "./presenter";

class Container extends Component {
  render() {
    console.log(this.props);
    return <Profile {...this.state} />;
  }
}

export default Container;
