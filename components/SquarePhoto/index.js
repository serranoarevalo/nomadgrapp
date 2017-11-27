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
const width = Dimensions.get("window").width;
import { API_URL } from "../../constants";

const SquarePhoto = props => (
  <TouchableOpacity onPress={props.onPress}>
    <FadeIn>
      <Image source={{ uri: API_URL + props.imageUrl }} style={styles.image} />
    </FadeIn>
  </TouchableOpacity>
);

SquarePhoto.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  image: {
    width: width / 3,
    height: width / 3
  }
});

export default SquarePhoto;
