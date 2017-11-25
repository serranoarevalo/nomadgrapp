import React from "react";
import { Text, TouchableHighlight } from "react-native";

const HomeScreen = props => (
  <TouchableHighlight onPress={() => props.navigate("Likes")}>
    <Text>Home!</Text>
  </TouchableHighlight>
);

export default HomeScreen;
