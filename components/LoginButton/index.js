import React from "react";
import PropTypes from "prop-types";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator
} from "react-native";
const width = Dimensions.get("window").width;

const LoginButton = (props, context) => (
  <TouchableOpacity onPressOut={props.onTap} disabled={!props.enabled}>
    <View
      style={
        props.enabled
          ? [styles.container, styles.enabledBtn]
          : [styles.container, styles.disabledBtn]
      }
    >
      {props.isSubmitting ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={styles.text}>{props.text}</Text>
      )}
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    height: 45,
    width: width - 80,
    alignItems: "center",
    backgroundColor: "#3E99EE",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 10
  },
  text: {
    fontWeight: "600",
    color: "white"
  },
  disabledBtn: {
    opacity: 0.5
  },
  enabledBtn: {
    opacity: 1
  }
});

LoginButton.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
  onTap: PropTypes.func.isRequired,
  enabled: PropTypes.bool.isRequired
};

export default LoginButton;
