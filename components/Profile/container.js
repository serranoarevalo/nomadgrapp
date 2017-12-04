import React, { Component } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import Profile from "./presenter";
import ActionSheet from "react-native-actionsheet";

const CANCEL_INDEX = 0;
const DESTRUCTIVE_INDEX = 1;

const options = ["Cancel", "Log Out"];

class Container extends Component {
  state = {
    isFetching: true,
    mode: "grid"
  };
  static propTypes = {
    logout: PropTypes.func.isRequired
  };
  render() {
    const { user } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <Profile
          {...this.state}
          {...this.props}
          {...user}
          handleButtonPress={this._handleButtonPress}
          handleGridTap={this._handleGridTap}
          handleListTap={this._handleListTap}
          showActionSheet={this._showActionSheet}
          handleButtonPress={this._handleButtonPress}
        />
        <ActionSheet
          ref={actionSheet => (this.actionSheet = actionSheet)}
          options={options}
          cancelButtonIndex={CANCEL_INDEX}
          destructiveButtonIndex={DESTRUCTIVE_INDEX}
          onPress={this._handleSheetPress}
        />
      </View>
    );
  }
  _handleButtonPress = () => {};
  _handleSheetPress = index => {
    const { logout } = this.props;
    if (index === 1) {
      logout();
    }
  };
  _handleGridTap = () => {
    this.setState({ mode: "grid" });
  };
  _handleListTap = () => {
    this.setState({ mode: "list" });
  };
  _showActionSheet = () => {
    const { user } = this.props;
    if (user.is_self) {
      this.actionSheet.show();
    }
  };
}

export default Container;
