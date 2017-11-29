import React from "react";
import PropTypes from "prop-types";
import {
  TouchableOpacity,
  Image,
  Square,
  StyleSheet,
  Dimensions,
  Text
} from "react-native";
import FadeIn from "react-native-fade-in-image";
import FitImage from "react-native-fit-image";
const width = Dimensions.get("window").width;
import { API_URL } from "../../constants";
import { withNavigation } from "react-navigation";

const SquarePhoto = props => (
  <TouchableOpacity onPress={() => props.navigation.navigate("PhotoDetail")}>
    <FadeIn>
      <Image source={{ uri: props.imageUrl }} style={styles.image} />
    </FadeIn>
  </TouchableOpacity>
);

SquarePhoto.propTypes = {
  imageUrl: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  image: {
    width: width / 3,
    height: width / 3
  }
});

export default withNavigation(SquarePhoto);
