import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import HomeScreen from "./presenter";
import { Ionicons } from "@expo/vector-icons";

class Container extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return <HomeScreen navigate={navigate} />;
  }
}

export default Container;
