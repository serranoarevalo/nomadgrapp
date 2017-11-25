import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get("window").width;

class LoginTextInput extends Component {
  componentWillReceiveProps = nextProps => {
    if (nextProps.focus) {
      this.input.focus();
    }
  };

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    returnKeyType: PropTypes.string.isRequired,
    secureTextEntry: PropTypes.bool,
    onSubmit: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func
  };
  render() {
    const {
      onChange,
      value,
      placeholder,
      secureTextEntry,
      returnKeyType,
      onSubmit,
      onFocus,
      onBlur
    } = this.props;
    return (
      <TextInput
        style={styles.textInput}
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
        autoCapitalize={"none"}
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        returnKeyType={returnKeyType}
        onSubmitEditing={onSubmit}
        ref={input => (this.input = input)}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    );
  }
}

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

export default LoginTextInput;
