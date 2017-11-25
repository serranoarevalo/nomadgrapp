import React from "react";
import PropTypes from "prop-types";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get("window").width;

const Header = props => (
  <View style={styles.container}>
    <View style={styles.column}>{props.leftComponent}</View>
    <View style={styles.column}>{props.centerComponent}</View>
    <View style={styles.column}>{props.rightComponent}</View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAFAFA",
    width,
    height: 65,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "rgba(0, 0, 0, .3)"
  }
});

Header.propTypes = {
  leftComponent: PropTypes.node.isRequired,
  rightComponent: PropTypes.node.isRequired,
  centerComponent: PropTypes.node.isRequired
};

export default Header;
