import React, { Component } from "react";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";

class AddPhotoLink extends Component {
  static navigationOptions = {
    tabBarIcon: ({ focused }) => {
      return (
        <Ionicons name="ios-add-circle-outline" size={30} color={"black"} />
      );
    }
  };
  render() {
    return null;
  }
}

export default AddPhotoLink;
