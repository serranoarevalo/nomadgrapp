import React, { Component } from "react";
import { Text, View, TouchableOpacity, CameraRoll } from "react-native";
import { Camera, Permissions } from "expo";
import PickPhotoScreen from "./presenter";

class Container extends Component {
  state = {
    photos: null,
    pickedPhoto: null
  };
  async componentWillMount() {
    let { edges } = await CameraRoll.getPhotos({
      first: 2000,
      groupTypes: "SavedPhotos",
      assetType: "Photos"
    });
    this.setState({
      photos: edges,
      pickedPhoto: edges[0]
    });
  }
  render() {
    return (
      <PickPhotoScreen
        {...this.state}
        pickPhoto={this._pickPhoto}
        approvePhoto={this._approvePhoto}
      />
    );
  }
  _pickPhoto = photo => {
    this.setState({
      pickedPhoto: photo
    });
  };
  _approvePhoto = () => {};
}

export default Container;
