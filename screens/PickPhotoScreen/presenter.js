import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar
} from "react-native";

const PickPhotoScreen = props => (
  <View style={styles.container}>
    <View style={styles.btnContainer}>
      <TouchableOpacity>
        <View style={styles.btn} />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: { flex: 2 },
  btnContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  btn: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 15,
    borderColor: "#bbb",
    backgroundColor: "white"
  }
});

export default PickPhotoScreen;
