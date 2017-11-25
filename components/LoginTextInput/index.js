import React from "react";
import PropTypes from "prop-types";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get("window").width;

const LoginTextInput = (props, context) => (
  <TextInput
    style={styles.textInput}
    onChangeText={props.onChange}
    value={props.value}
    placeholder={props.placeholder}
    autoCapitalize={"none"}
    autoCorrect={false}
    autoFocus={props.autoFocus}
    secureTextEntry={props.secureTextEntry}
    returnKeyType={props.returnKeyType}
  />
);

const styles = StyleSheet.create({
  textInput: {
    height: 45,
    borderColor: "rgba(0,0,0,.0975)",
    borderWidth: 1,
    width: width - 80,
    marginBottom: 15,
    borderRadius: 5,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#FAFAFA",
    lineHeight: 20
  }
});

LoginTextInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool.isRequired,
  returnKeyType: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool
};

export default LoginTextInput;
