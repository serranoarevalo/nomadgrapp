import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SquarePhoto from "../../components/SquarePhoto";
import FadeIn from "react-native-fade-in-image";
import ProfileNumber from "../ProfileNumber";
import Button from "../Button";
import Photo from "../Photo";

const width = Dimensions.get("window").width;

const Profile = props => (
  <View style={styles.container}>
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={props.isFetching}
          onRefresh={props.getProfile}
          tintColor={"black"}
          titleColor={"black"}
        />
      }
    >
      <View style={styles.profile}>
        <View style={styles.header}>
          <TouchableOpacity onPress={props.showActionSheet}>
            <Image
              source={
                props.profile_image
                  ? {
                      uri: props.profile_image
                    }
                  : require("../../assets/images/noPhoto.jpg")
              }
              style={styles.avatar}
              defaultSource={require("../../assets/images/noPhoto.jpg")}
            />
          </TouchableOpacity>
          <View style={styles.headerColumn}>
            <View style={styles.profileNumbers}>
              <ProfileNumber number={props.post_count} text={"posts"} />
              <ProfileNumber
                number={props.followers_count}
                text={"followers"}
              />
              <ProfileNumber
                number={props.following_count}
                text={"following"}
              />
            </View>
            <Button
              textColor={props.is_self ? "black" : "white"}
              backgroundColor={props.is_self ? "white" : "#3e99ee"}
              onPress={props.handleButtonPress}
              text={props.is_self ? "Edit Profile" : "Follow"}
              borderColor={props.is_self ? "black" : "#3e99ee"}
            />
          </View>
        </View>
        <View style={styles.headerText}>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.bio}>{props.bio}</Text>
          <TouchableOpacity>
            <Text style={styles.website}>{props.website}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.modeBar}>
          <TouchableOpacity onPressOut={props.handleGridTap}>
            <View style={styles.modeIcon}>
              <Ionicons
                name={"ios-grid-outline"}
                size={30}
                color={props.mode === "grid" ? "#3e99ee" : "black"}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPressOut={props.handleListTap}>
            <View style={styles.modeIcon}>
              <Ionicons
                name={"ios-list"}
                size={38}
                color={props.mode === "list" ? "#3e99ee" : "black"}
              />
            </View>
          </TouchableOpacity>
        </View>

        {props.mode === "list" &&
          props.images &&
          props.images.map(photo => <Photo {...photo} key={photo.id} />)}

        <View style={styles.photoContainer}>
          {props.mode === "grid" &&
            props.images &&
            props.images.map(photo => (
              <SquarePhoto
                imageUrl={photo.file}
                key={photo.id}
                onPress={() => {}}
              />
            ))}
        </View>
      </View>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  header: {
    flexDirection: "row",
    marginTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: "space-between"
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  headerColumn: {
    width: width / 2
  },
  profileNumbers: {
    flexDirection: "row",
    marginBottom: 7,
    justifyContent: "space-between"
  },
  headerText: {
    paddingLeft: 15,
    paddingRight: 15
  },
  name: {
    fontWeight: "600",
    marginTop: 10,
    marginBottom: 5,
    fontSize: 13
  },
  bio: {
    marginBottom: 5
  },
  website: {
    color: "#003569"
  },
  modeBar: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderColor: "#bbb",
    borderWidth: StyleSheet.hairlineWidth
  },
  modeIcon: {
    width: width / 2,
    alignItems: "center"
  },
  photoContainer: {
    flexDirection: "row"
  }
});

Profile.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  getProfile: PropTypes.func.isRequired,
  handleGridTap: PropTypes.func.isRequired,
  handleListTap: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
  handleButtonPress: PropTypes.func.isRequired,
  bio: PropTypes.string,
  followers_count: PropTypes.number,
  following_count: PropTypes.number,
  images: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ),
  name: PropTypes.string,
  post_count: PropTypes.number,
  profile_image: PropTypes.string,
  username: PropTypes.string,
  website: PropTypes.string,
  is_self: PropTypes.bool,
  showActionSheet: PropTypes.func.isRequired
};

export default Profile;
