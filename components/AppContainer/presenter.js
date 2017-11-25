import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import LoggedOutNavigation from "../../navigation/LoggedOutNavigation";
import RootNavigation from "../../navigation/RootNavigation";

const AppContainer = props => (
  <View style={styles.container}>
    {props.isLoggedIn ? <RootNavigation /> : <LoggedOutNavigation />}
  </View>
);

AppContainer.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center"
  }
});

export default AppContainer;
