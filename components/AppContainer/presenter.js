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
    if (nextProps.isLoggedIn && nextProps.username) {
      initApp(nextProps.username);
    }
  };
  componentDidMount() {
    const { isLoggedIn, username, initApp } = this.props;
    if (isLoggedIn && username) {
      initApp(username);
    }
  }

  render() {
    const { isLoggedIn, username } = this.props;
    return (
      <View style={styles.container}>
        {isLoggedIn && username ? (
          <RootNavigation screenProps={{ username: username }} />
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
