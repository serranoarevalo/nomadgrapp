import React, { Component } from "react";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import NotificationsScreen from "./presenter";

class Container extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return <NotificationsScreen />;
  }
}

export default Container;
