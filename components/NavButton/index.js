import React from "react";
import PropTypes from "prop-types";
import { TouchableWithoutFeedback, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const NavButton = props => (
  <TouchableWithoutFeedback onPress={props.onPress}>
    <View style={styles.container}>
      <Ionicons name={props.iconName} size={30} color={"black"} />
    </View>
  </TouchableWithoutFeedback>
);

NavButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10
  }
});

export default NavButton;
