import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import LoggedOutNavigation from "../../navigation/LoggedOutNavigation";
import RootNavigation from "../../navigation/RootNavigation";

class AppContainer extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    username: PropTypes.string
  };
  componentWillReceiveProps = nextProps => {
    const { initApp } = this.props;
    if (nextProps.isLoggedIn && nextProps.profile) {
      initApp(nextProps.username);
    }
  };
  componentDidMount() {
    const { isLoggedIn, profile, initApp } = this.props;
    if (isLoggedIn && profile) {
      initApp(profile.username);
    }
  }

  render() {
    const { isLoggedIn, profile } = this.props;
    return (
      <View style={styles.container}>
        {isLoggedIn && profile ? (
          <RootNavigation screenProps={{ username: profile.username }} />
        ) : (
          <LoggedOutNavigation />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center"
  }
});

export default AppContainer;
