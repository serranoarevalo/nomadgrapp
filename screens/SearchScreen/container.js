import React, { Component } from "react";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import SearchScreen from "./presenter";

class Container extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return <SearchScreen navigate={navigate} />;
  }
}

export default Container;
