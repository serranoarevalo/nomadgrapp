import React from "react";
import { View, ActivityIndicator, StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get("window").width;

const ImageLoading = props => (
  <View style={styles.container}>
    <ActivityIndicator size="small" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  }
});

export default ImageLoading;
