import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";

const Button = props => (
  <TouchableHighlight onPressOut={props.onPress} style={styles.touchable}>
    <View style={styles.button}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  </TouchableHighlight>
);

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  touchable: {
    borderRadius: 3
  },
  button: {
    borderRadius: 3,
    backgroundColor: "#3E99EE",
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 20,
    paddingRight: 20
  },
  text: {
    color: "white",
    fontWeight: "600"
  }
});

export default Button;
