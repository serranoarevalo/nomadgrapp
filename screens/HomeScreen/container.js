import React, { Component } from "react";
import PropTypes from "prop-types";
import HomeScreen from "./presenter";

class Container extends Component {
  state = {
    isFetching: true
  };
  static propTypes = {
    getFeed: PropTypes.func.isRequired
  };
  _refreshFeed = () => {
    const { getFeed } = this.props;
    this.setState({
      isFetching: true
    });
    getFeed();
  };
  render() {
    const { navigate } = this.props.navigation;

    return (
      <HomeScreen
        navigate={navigate}
        {...this.state}
        onRefresh={this._refreshFeed}
      />
    );
  }
}

export default Container;
