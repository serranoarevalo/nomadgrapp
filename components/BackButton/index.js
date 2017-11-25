import React from "react";
import { TouchableWithoutFeedback, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const BackButton = props => (
  <TouchableWithoutFeedback onPress={props.onPress}>
    <View style={styles.container}>
      <Ionicons name="ios-arrow-back" size={30} color={"black"} />
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10
  }
});

export default BackButton;
