import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions
} from "react-native";
import LoginTextInput from "../../components/LoginTextInput";
import LoginButton from "../../components/LoginButton";

const width = Dimensions.get("window").width;

class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <Image
            source={require("../../assets/images/logo-white.png")}
            resizeMode="stretch"
            style={styles.logo}
          />
        </View>
        <View style={styles.content}>
          <LoginTextInput placeholder={"Username"} returnKeyType={"next"} />
          <LoginTextInput
            placeholder={"Password"}
            returnKeyType={"go"}
            secureTextEntry={true}
          />
          <LoginButton text={"Login"} isSubmitting={false} />
        </View>
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
    width: 182,
    height: 59,
    marginTop: 20
  },
  content: {
    flex: 4,
    backgroundColor: "white",
    paddingTop: 20,
    alignItems: "center",
    width,
    justifyContent: "flex-start"
  }
});

export default LoginScreen;
