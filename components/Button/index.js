import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Button = props => (
  <TouchableOpacity
    onPressOut={props.onPress}
    style={[
      styles.touchable,
      { backgroundColor: props.backgroundColor },
      { borderColor: props.borderColor }
    ]}
  >
    <View style={styles.button}>
      <Text style={[styles.text, { color: props.textColor }]}>
        {props.text}
      </Text>
    </View>
  </TouchableOpacity>
);

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  borderColor: PropTypes.string
};

const styles = StyleSheet.create({
  touchable: {
    borderRadius: 3,
    borderWidth: StyleSheet.hairlineWidth
  },
  button: {
    borderRadius: 3,
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 20,
    paddingRight: 20
  },
  text: {
    fontWeight: "600",
    textAlign: "center"
  }
});

export default Button;
