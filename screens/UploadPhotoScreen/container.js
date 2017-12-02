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
    const { navigation: { state: { params } } } = this.props;
    return (
      <UploadPhotoScreen
        {...this.state}
        {...this.props}
        photo={params.photo}
        onCaptionChange={this._onCaptionChange}
        onLocationChange={this._onLocationChange}
        onHashtagChange={this._onHashtagChange}
      />
    );
  }
  _onCaptionChange = text => {
    this.setState({
      caption: text
    });
  };
  _onLocationChange = text => {
    this.setState({
      location: text
    });
  };
  _onHashtagChange = text => {
    this.setState({
      hashtags: text
    });
  };
}

export default Container;
