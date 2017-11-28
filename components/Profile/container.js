import React, { Component } from "react";
import PropTypes from "prop-types";
import Profile from "./presenter";

class Container extends Component {
  state = {
    isFetching: true,
    mode: "grid"
  };
  componentDidMount() {
    const { user, getUserProfile } = this.props;
    if (user) {
      this.setState({ isFetching: false });
    } else {
      this._getProfile();
    }
  }
  componentWillReceiveProps = nextProps => {
    if (nextProps.user) {
      this.setState({
        isFetching: false
      });
    }
  };
  _getProfile = () => {
    const { getUserProfile } = this.props;
    this.setState(
      {
        isFetching: true
      },
      getUserProfile()
    );
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
        {...user}
        getProfile={this._getProfile}
        handleButtonPress={this._handleButtonPress}
        handleGridTap={this._handleGridTap}
        handleListTap={this._handleListTap}
      />
    );
  }
}

export default Container;
