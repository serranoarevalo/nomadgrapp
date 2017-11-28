import React, { Component } from "react";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import Profile from "../../components/Profile";

class Container extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: screenProps.username
  });
  render() {
    const { user: { profile } } = this.props;
    return <Profile user={profile} />;
  }
}

export default Container;
