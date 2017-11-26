import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, Image } from "react-native";
import HomeScreen from "./presenter";
import NavButton from "../../components/NavButton";

class Container extends Component {
  static navigationOptions = {
    headerTitle: (
      <Image
        source={require("../../assets/images/logo.png")}
        style={{ height: 35 }}
        resizeMode="contain"
      />
    ),
    headerLeft: <NavButton iconName="ios-camera-outline" />
  };
  render() {
    const { navigate } = this.props.navigation;
    return <HomeScreen navigate={navigate} />;
  }
}

export default Container;
