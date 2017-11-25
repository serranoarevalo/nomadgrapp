import React from "react";
import { View, Text } from "react-native";

const HomeScreen = props => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text onPress={() => props.navigate("AddPhoto")}>Hello</Text>
  </View>
);

export default HomeScreen;
