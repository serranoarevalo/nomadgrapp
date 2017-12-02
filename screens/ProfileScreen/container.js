import React, { Component } from "react";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import Profile from "../../components/Profile";

class Container extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: screenProps.username
  });
  state = {
    isFetching: true
  };
  componentDidMount() {
    const { profile, getUserProfile } = this.props;
    if (profile) {
      this.setState({
        isFetching: false
      });
    } else {
      getUserProfile(profile.username);
    }
  }
  componentWillReceiveProps = nextProps => {
    if (nextProps.profile) {
      this.setState({
        isFetching: false
      });
    }
  };
  render() {
    const { profile } = this.props;
    return (
      <Profile user={profile} {...this.state} getProfile={this._getProfile} />
    );
  }
  _getProfile = () => {
    const { getUserProfile, profile } = this.props;
    this.setState(
      {
        isFetching: true
      },
      getUserProfile(profile.username)
    );
  };
}

export default Container;
