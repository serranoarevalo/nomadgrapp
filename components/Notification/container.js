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
  _handleFollowClick = async () => {
    const { followUser, unfollowUser } = this.props;
    const { following } = this.state;
    let action;
    if (following) {
      action = await unfollowUser();
      if (action === "ok") {
        this.setState({
          following: false
        });
      }
    } else {
      action = await followUser();
      if (action === "ok") {
        this.setState({
          following: true
        });
      }
    }
  };
  render() {
    return (
      <Notification
        {...this.props}
        handleFollowClick={this._handleFollowClick}
      />
    );
  }
}

export default Container;
