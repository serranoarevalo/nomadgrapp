import React, { Component } from "react";
import PropTypes from "prop-types";
import UploadPhotoScreen from "./presenter";
import { Alert } from "react-native";

class Container extends Component {
  state = {
    location: "",
    caption: "",
    hashtags: "",
    isUploading: false
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
        submit={this._submit}
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
  _submit = () => {
    const { location, caption, hashtags, isUploading } = this.state;
    if (!isUploading) {
      if (location && caption && hashtags) {
        this.setState({
          isUploading: true
        });
        //submit();
      } else {
        Alert.alert("All fields are required");
      }
    }
  };
}

export default Container;
