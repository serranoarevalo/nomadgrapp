import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { API_URL } from "../../constants";
import FadeIn from "react-native-fade-in-image";
import Button from "../Button";
import { withNavigation } from "react-navigation";

const Notification = props => (
  <View style={styles.container}>
    <TouchableOpacity
      onPress={() =>
        props.navigation.navigate("ProfileDetail", {
          user: props.creator
        })
      }
    >
      <FadeIn>
        <Image
          source={{ uri: API_URL + props.creator.profile_image }}
          style={styles.avatar}
        />
      </FadeIn>
    </TouchableOpacity>
    <Text style={styles.centerText}>
      <Text style={styles.username}>{props.creator.username}</Text>{" "}
      {props.notification_type === "comment" && `commented: ${props.comment}`}
      {props.notification_type === "like" && `liked your post`}
      {props.notification_type === "follow" && `started following you`}
    </Text>
    {props.notification_type === "follow" ? (
      <Button
        text={props.following ? "Unfollow" : "Follow"}
        onPress={props.handleFollowClick}
        backgroundColor="#3e99ee"
        textColor="white"
        borderColor="#3e99ee"
      />
    ) : (
      <FadeIn>
        <Image
          source={{ uri: API_URL + props.image.file }}
          style={styles.payload}
        />
      </FadeIn>
    )}
  </View>
);

Notification.propTypes = {
  comment: PropTypes.string,
  created_at: PropTypes.string.isRequired,
  creator: PropTypes.shape({
    following: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    profile_image: PropTypes.string,
    username: PropTypes.string.isRequired
  }).isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.shape({
    file: PropTypes.string.isRequired
  }),
  notification_type: PropTypes.oneOf(["like", "follow", "comment"]).isRequired,
  to: PropTypes.number.isRequired,
  updated_at: PropTypes.string.isRequired,
  following: PropTypes.bool.isRequired
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center"
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 15
  },
  username: {
    fontWeight: "600"
  },
  centerText: {
    marginRight: "auto"
  },
  payload: {
    height: 50,
    width: 50
  }
});

export default withNavigation(Notification);
