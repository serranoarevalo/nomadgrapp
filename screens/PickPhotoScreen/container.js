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
      groupTypes: "All",
      assetType: "All"
    });
    this.setState({
      photos: edges,
      pickedPhoto: edges[0]
    });
  }
  _pickPhoto = photo => {
    this.setState({
      pickedPhoto: photo
    });
  };
  render() {
    return <PickPhotoScreen {...this.state} pickPhoto={this._pickPhoto} />;
  }
}

export default Container;
