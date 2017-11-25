import React from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Image
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../../components/Header";

const HomeScreen = props => (
  <View style={styles.container}>
    <Header
      leftComponent={<LeftComponent {...props} />}
      centerComponent={<CenterComponet />}
      rightComponent={<RightComponent {...props} />}
    />
  </View>
);

const LeftComponent = props => (
  <TouchableWithoutFeedback onPressOut={() => props.navigate("AddPhoto")}>
    <Ionicons name="ios-camera-outline" size={32} color={"black"} />
  </TouchableWithoutFeedback>
);

const CenterComponet = props => (
  <Image
    source={require("../../assets/images/logo.png")}
    style={{ height: 35 }}
    resizeMode="contain"
  />
);

const RightComponent = props => (
  <TouchableWithoutFeedback>
    <Ionicons name="ios-paper-plane-outline" size={32} color={"black"} />
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between"
  }
});

export default HomeScreen;
