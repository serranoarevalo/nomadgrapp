import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const PhotoActions = props => (
  <View style={styles.container}>
    <TouchableOpacity>
      <View style={styles.action}>
        <Ionicons
          name={props.isLiked ? "ios-heart" : "ios-heart-outline"}
          size={30}
          color={props.isLiked ? "#EB4B59" : "black"}
        />
      </View>
    </TouchableOpacity>
    <TouchableOpacity>
      <View style={styles.action}>
        <Ionicons name="ios-text-outline" size={30} color="black" />
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    flexDirection: "row"
  },
  action: {
    marginRight: 10
  }
});

PhotoActions.propTypes = {
  isLiked: PropTypes.bool.isRequired,
  photoId: PropTypes.number.isRequired
};

export default PhotoActions;
