import React, { Component } from "react";
import PropTypes from "prop-types";
import Profile from "./presenter";

class Container extends Component {
  state = {
    isFetching: true,
    mode: "grid"
  };
  _handleButtonPress = () => {};
  _handleGridTap = () => {
    this.setState({ mode: "grid" });
  };
  _handleListTap = () => {
    this.setState({ mode: "list" });
  };
  render() {
    const { user } = this.props;
    return (
      <Profile
        {...this.state}
        {...this.props}
        {...user}
        handleButtonPress={this._handleButtonPress}
        handleGridTap={this._handleGridTap}
        handleListTap={this._handleListTap}
      />
    );
  }
}

export default Container;
