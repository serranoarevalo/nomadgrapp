import React, { Component } from "react";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import Profile from "../../components/Profile";

class Container extends Component {
  constructor(props) {
    super(props);
    const { navigation: { state: { params } } } = props;
    this.state = {
      isFetching: true,
      profile: {
        ...params.user
      }
    };
  }
  componentDidMount = () => {
    this._getProfile();
  };
  render() {
    const { profile } = this.state;
    return (
      <Profile user={profile} {...this.state} getProfile={this._getProfile} />
    );
  }
  _getProfile = async () => {
    const { profile } = this.state;
    const { getUserProfile, navigation: { state: { params } } } = this.props;
    this.setState({
      isFetching: true
    });
    const action = await getUserProfile(params.user.username);
    if (action) {
      this.setState({
        profile: action,
        isFetching: false
      });
    }
  };
}

export default Container;
