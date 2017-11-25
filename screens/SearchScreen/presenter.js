import React from "react";
import { Text, TouchableHighlight } from "react-native";

const SearchScreen = props => (
  <TouchableHighlight onPress={() => props.navigate("Likes")}>
    <Text>Search!</Text>
  </TouchableHighlight>
);

export default SearchScreen;
