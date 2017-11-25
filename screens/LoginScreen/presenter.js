import React, { Component } from "react";
import PropTypes from "prop-types";
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

const LoginScreen = props => (
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
        onChange={props.handleUsernameChange}
        placeholder={"Username"}
        returnKeyType={"next"}
        value={props.username}
        onSubmit={props.handleOnUsernameSubmit}
        onFocus={props.unfocusPassword}
      />
      <LoginTextInput
        placeholder={"Password"}
        returnKeyType={"go"}
        secureTextEntry={true}
        onChange={props.handlePasswordChange}
        value={props.password}
        focus={props.passwordFocused}
        onSubmit={props.handleSubmit}
        onBlur={props.unfocusPassword}
      />
      <LoginButton
        onTap={props.handleSubmit}
        text={"Login"}
        isSubmitting={props.isSubmitting}
        enabled={props.username && props.password ? true : false}
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

LoginScreen.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordFocused: PropTypes.bool.isRequired,
  unfocusPassword: PropTypes.func.isRequired,
  handleUsernameChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  handleOnUsernameSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

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
