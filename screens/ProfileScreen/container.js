import React, { Component } from "react";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import ProfileScreen from "./presenter";

class Container extends Component {
  static navigationOptions = {
    tabBarIcon: ({ focused }) => {
      if (focused) {
        return <Ionicons name="ios-person" size={30} color={"black"} />;
      } else {
        return <Ionicons name="ios-person-outline" size={30} color={"black"} />;
      }
    }
  };
  render() {
    return <ProfileScreen />;
  }
}

export default Container;
