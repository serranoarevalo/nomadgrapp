import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import LoggedOutNavigation from "../../navigation/LoggedOutNavigation";

const AppContainer = props => (
  <View style={styles.container}>
    {props.isLoggedIn ? <Text>Hello User</Text> : <LoggedOutNavigation />}
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
