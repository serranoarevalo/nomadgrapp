import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ProfileNumber = props => (
  <TouchableOpacity onPressOut={props.onPress}>
    <View style={styles.item}>
      <Text style={styles.number}>{props.number}</Text>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  </TouchableOpacity>
);

ProfileNumber.propTypes = {
  onPress: PropTypes.func,
  number: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  item: {
    alignItems: "center"
  },
  number: {
    fontSize: 16,
    fontWeight: "600"
  },
  text: {
    fontSize: 12,
    color: "#999"
  }
});

export default ProfileNumber;
