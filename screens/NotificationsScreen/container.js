import React, { Component } from "react";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import NotificationsScreen from "./presenter";

class Container extends Component {
  static navigationOptions = {
    tabBarIcon: ({ focused }) => {
      if (focused) {
        return <Ionicons name="ios-heart" size={30} color={"black"} />;
      } else {
        return <Ionicons name="ios-heart-outline" size={30} color={"black"} />;
      }
    }
  };
  render() {
    return <NotificationsScreen />;
  }
}

export default Container;
