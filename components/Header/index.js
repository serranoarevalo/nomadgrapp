import React from "react";
import PropTypes from "prop-types";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get("window").width;

const Header = props => (
  <View style={styles.container}>
    <View style={styles.leftComponent}>{props.leftComponent}</View>
    <View style={styles.centerComponent}>{props.centerComponent}</View>
    <View style={styles.rightComponent}>{props.rightComponent}</View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAFAFA",
    width,
    height: 65,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "rgba(0, 0, 0, .3)"
  },
  leftComponent: {
    marginRight: "auto"
  },
  rightComponent: {
    marginLeft: "auto"
  }
});

Header.propTypes = {
  leftComponent: PropTypes.node.isRequired,
  rightComponent: PropTypes.node.isRequired,
  centerComponent: PropTypes.node.isRequired
};

export default Header;
