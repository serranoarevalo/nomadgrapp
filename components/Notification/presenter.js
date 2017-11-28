import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Image, StyleSheet } from "react-native";
import { API_URL } from "../../constants";
import FadeIn from "react-native-fade-in-image";
import Button from "../Button";

class Notification extends Component {
  static propTypes = {
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
    notification_type: PropTypes.oneOf(["like", "follow", "comment"])
      .isRequired,
    to: PropTypes.number.isRequired,
    updated_at: PropTypes.string.isRequired
  };
  state = {
    following: this.props.creator.following
  };
  _handleFollowClick = async () => {
    const { followUser, unfollowUser } = this.props;
    const { following } = this.state;
    let action;
    if (following) {
      action = await unfollowUser();
      if (action === "ok") {
        this.setState({
          following: false
        });
      }
    } else {
      action = await followUser();
      if (action === "ok") {
        this.setState({
          following: true
        });
      }
    }
  };
  render() {
    const { following } = this.state;
    const { creator, notification_type, image, comment } = this.props;
    console.log(creator.following);
    return (
      <View style={styles.container}>
        <FadeIn>
          <Image
            source={{ uri: API_URL + creator.profile_image }}
            style={styles.avatar}
          />
        </FadeIn>
        <Text style={styles.centerText}>
          <Text style={styles.username}>{creator.username}</Text>{" "}
          {notification_type === "comment" && `commented: ${comment}`}
          {notification_type === "like" && `liked your post`}
          {notification_type === "follow" && `started following you`}
        </Text>
        {notification_type === "follow" ? (
          <Button
            text={following ? "Unfollow" : "Follow"}
            onPress={this._handleFollowClick}
          />
        ) : (
          <FadeIn>
            <Image
              source={{ uri: API_URL + image.file }}
              style={styles.payload}
            />
          </FadeIn>
        )}
      </View>
    );
  }
}

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

export default Notification;
