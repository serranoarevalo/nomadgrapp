import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions,
  Alert,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import LoginTextInput from "../../components/LoginTextInput";
import LoginButton from "../../components/LoginButton";

const width = Dimensions.get("window").width;

class LoginScreen extends Component {
  state = {
    username: "",
    password: "",
    isSubmitting: false,
    passwordFocused: false
  };
  render() {
    const { username, password, isSubmitting, passwordFocused } = this.state;
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
            onSubmit={this._handleOnUsernameSubmit}
            onFocus={this._unfocusPassword}
          />
          <LoginTextInput
            placeholder={"Password"}
            returnKeyType={"go"}
            secureTextEntry={true}
            onChange={this._handlePasswordChange}
            value={password}
            focus={passwordFocused}
            onSubmit={this._handleSubmit}
            onBlur={this._unfocusPassword}
          />
          <LoginButton
            onTap={this._handleSubmit}
            text={"Login"}
            isSubmitting={isSubmitting}
            enabled={username && password ? true : false}
          />
          <TouchableOpacity
            style={styles.fbContainer}
            onPressOut={() => alert("hello")}
          >
            <View style={styles.fbView}>
              <Ionicons name="logo-facebook" size={22} color="#3E99EE" />
              <Text style={styles.fbText}>Log in with Facebook</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  _unfocusPassword = () => {
    this.setState({
      passwordFocused: false
    });
  };
  _handleUsernameChange = text => {
    this.setState({
      username: text
    });
  };
  _handlePasswordChange = text => {
    this.setState({
      password: text
    });
  };
  _handleOnUsernameSubmit = () => {
    this.setState({
      passwordFocused: true
    });
  };
  _handleSubmit = () => {
    const { username, password, isSubmitting } = this.state;
    if (username && password) {
      if (!isSubmitting) {
        this.setState({
          isSubmitting: true
        });
      }
    } else {
      Alert.alert("All fields are required");
    }
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
  },
  fbContainer: {
    marginTop: 40
  },
  fbView: {
    alignItems: "center",
    flexDirection: "row"
  },
  fbText: {
    color: "#3E99EE",
    fontWeight: "600",
    marginLeft: 10
  }
});

export default LoginScreen;
