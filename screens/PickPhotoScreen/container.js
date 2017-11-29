import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Camera, Permissions } from "expo";
import PickPhotoScreen from "./presenter";

class Container extends Component {
  render() {
    return <PickPhotoScreen {...this.state} />;
  }
}

export default Container;
