import React, { Component } from "react";
import PropTypes from "prop-types";
import LoginScreen from "./presenter";

class Container extends Component {
  static defaultProps = {
    isSubmitting: false
  };
  static propTypes = {
    isSubmitting: PropTypes.bool.isRequired,
    startFetching: PropTypes.func.isRequired,
    stopFetching: PropTypes.func.isRequired
  };
  state = {
    username: "",
    password: "",
    passwordFocused: false
  };
  render() {
    const { isSubmitting } = this.props;
    return (
      <LoginScreen
        {...this.state}
        unfocusPassword={this._unfocusPassword}
        handleUsernameChange={this._handleUsernameChange}
        handlePasswordChange={this._handlePasswordChange}
        handleOnUsernameSubmit={this._handleOnUsernameSubmit}
        handleSubmit={this._handleSubmit}
        isSubmitting={isSubmitting}
      />
    );
  }
  _unfocusPassword = () => {
    this.setState({
      passwordFocused: false
    });
  };
  _handleUsernameChange = text => {
    this.setState({
      username: text
    });
  };
  _handlePasswordChange = text => {
    this.setState({
      password: text
    });
  };
  _handleOnUsernameSubmit = () => {
    this.setState({
      passwordFocused: true
    });
  };
  _handleSubmit = () => {
    const { username, password } = this.state;
    const { startFetching, stopFetching, isSubmitting } = this.props;
    if (username && password) {
      if (!isSubmitting) {
        startFetching();
      }
    } else {
      Alert.alert("All fields are required");
    }
  };
}

export default Container;
