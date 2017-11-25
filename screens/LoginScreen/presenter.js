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
  state = {
    username: "",
    password: ""
  };
  render() {
    const { username, password } = this.state;
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
          <LoginTextInput
            onChange={this._handleUsernameChange}
            placeholder={"Username"}
            returnKeyType={"next"}
            value={username}
          />
          <LoginTextInput
            placeholder={"Password"}
            returnKeyType={"go"}
            secureTextEntry={true}
            onChange={this._handlePasswordChange}
            value={password}
          />
          <LoginButton text={"Login"} isSubmitting={false} />
        </View>
      </View>
    );
  }
  _handleUsernameChange = text => {
    this.setState({
      username: text
    });
  };
  _handlePasswordChange = password => {
    this.setState({
      password: text
    });
  };
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
