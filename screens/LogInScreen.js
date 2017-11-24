import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions
} from "react-native";

const width = Dimensions.get("window").width;

class LogInScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <Image
            source={require("../assets/images/logo-white.png")}
            resizeMode="center"
            style={styles.logo}
          />
        </View>
        <View style={styles.content} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  header: {
    backgroundColor: "#2A76AE",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width
  },
  logo: {
    width: 250
  },
  content: {
    flex: 3,
    backgroundColor: "red"
  }
});

export default LogInScreen;
