import React, { Component } from "react";
import PropTypes from "prop-types";
import Notification from "./presenter";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      following: props.creator.following
    };
  }
  static propTypes = {
    followUser: PropTypes.func.isRequired,
    unfollowUser: PropTypes.func.isRequired
  };
  render() {
    return (
      <Notification
        {...this.props}
        {...this.state}
        handleFollowClick={this._handleFollowClick}
      />
    );
  }
  _handleFollowClick = async () => {
    const { followUser, unfollowUser } = this.props;
    const { following } = this.state;
    let action;
    if (following) {
      this.setState({
        following: false
      });
      action = await unfollowUser();
      if (action !== "ok") {
        this.setState({
          following: true
        });
      }
    } else {
      this.setState({ following: true });
      action = await followUser();
      if (action !== "ok") {
        this.setState({
          following: false
        });
      }
    }
  };
}

export default Container;
