import React, { Component } from "react";
import PropTypes from "prop-types";
import UploadPhotoScreen from "./presenter";

class Container extends Component {
  state = {
    location: "",
    caption: "",
    hashtags: ""
  };
  render() {
    return <UploadPhotoScreen {...this.state} {...this.props} />;
  }
}

export default Container;
