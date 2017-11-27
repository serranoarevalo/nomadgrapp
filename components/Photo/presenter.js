import React from "react";
import PropTypes from "prop-types";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import FadeIn from "react-native-fade-in-image";
import FitImage from "react-native-fit-image";
import { API_URL } from "../../constants";
import PhotoActions from "../PhotoActions";

const width = Dimensions.get("window").width;

const Photo = props => (
  <View style={styles.photo}>
    <View style={styles.header}>
      <FadeIn>
        <Image
          source={{ uri: props.creator.profile_image }}
          style={styles.avatar}
        />
      </FadeIn>
      <View>
        <Text style={styles.author}>{props.creator.username}</Text>
        {props.location && (
          <Text style={styles.location}>{props.location}</Text>
        )}
      </View>
    </View>
    <FitImage
      source={{ uri: props.file }}
      originalWidth={width}
      originalHeight={props.is_vertical ? 600 : 300}
    />
    <View style={styles.photoMeta}>
      <PhotoActions isLiked={props.is_liked} photoId={props.id} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  photo: {
    flex: 1
  },
  header: {
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: "row",
    paddingTop: 15,
    paddingBottom: 10,
    alignItems: "center",
    flex: 1
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10
  },
  author: {
    fontWeight: "600",
    marginBottom: 3,
    fontSize: 14
  },
  location: {
    fontSize: 12
  },
  photoMeta: {
    paddingLeft: 15,
    paddingRight: 15
  }
});

Photo.propTypes = {
  id: PropTypes.number.isRequired,
  creator: PropTypes.shape({
    profile_image: PropTypes.string,
    username: PropTypes.string.isRequired
  }).isRequired,
  location: PropTypes.string.isRequired,
  file: PropTypes.string.isRequired,
  like_count: PropTypes.number.isRequired,
  caption: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      creator: PropTypes.shape({
        profile_image: PropTypes.string,
        username: PropTypes.string.isRequired
      }).isRequired
    })
  ).isRequired,
  natural_time: PropTypes.string.isRequired,
  is_liked: PropTypes.bool.isRequired,
  is_vertical: PropTypes.bool.isRequired
};

export default Photo;
