import React, { Component } from "react";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import ProfileScreen from "./presenter";

class Container extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: screenProps.username
  });
  render() {
    return <ProfileScreen />;
  }
}

export default Container;
