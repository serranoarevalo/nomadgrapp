import React from "react";
import PropTypes from "prop-types";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get("window").width;

const SearchBar = props => (
  <View style={styles.container}>
    <TextInput
      placeholder={"Search"}
      style={styles.searchBar}
      returnKeyType={"search"}
      {...props}
    />
  </View>
);

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onEndEditing: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAFAFA",
    width,
    justifyContent: "flex-end",
    paddingLeft: 10,
    paddingRight: 10,
    height: 63
  },
  searchBar: {
    height: 30,
    marginBottom: 5,
    borderRadius: 4,
    backgroundColor: "#EDEDEF",
    padding: 5
  }
});

export default SearchBar;
