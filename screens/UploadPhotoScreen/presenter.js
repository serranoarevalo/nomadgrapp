import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  StatusBar,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  Dimensions
} from "react-native";
import FadeIn from "react-native-fade-in-image";
const { width, height } = Dimensions.get("window");

const UploadPhotoScreen = props => (
  <View style={styles.container}>
    <StatusBar hidden={false} />
    <ScrollView>
      <View style={styles.formRow}>
        <FadeIn style={styles.photoContainer}>
          <Image source={{ uri: props.photo }} style={styles.photo} />
        </FadeIn>
        <TextInput
          value={props.caption}
          placeholder={"Caption"}
          style={styles.caption}
          onChangeText={props.onCaptionChange}
          multiline={true}
          placeholderTextColor={"#353535"}
        />
      </View>
      <View style={styles.formRow}>
        <TextInput
          value={props.location}
          placeholder={"Location"}
          style={styles.input}
          placeholderTextColor={"#353535"}
          onChangeText={props.onLocationChange}
        />
      </View>
      <View style={styles.formRow}>
        <TextInput
          value={props.hashtags}
          placeholder={"Tags (separated by commas)"}
          style={styles.input}
          placeholderTextColor={"#353535"}
          onChangeText={props.onHashtagChange}
        />
      </View>
    </ScrollView>
  </View>
);

UploadPhotoScreen.propTypes = {
  photo: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hashtags: PropTypes.string.isRequired,
  onCaptionChange: PropTypes.func.isRequired,
  onLocationChange: PropTypes.func.isRequired,
  onHashtagChange: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  photoContainer: {
    height: 80,
    width: 80
  },
  photo: {
    flex: 1
  },
  formRow: {
    flexDirection: "row",
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 15
  },
  caption: {
    marginLeft: 20,
    flex: 1
  },
  form: {
    flex: 1
  },
  input: {
    flex: 1
  }
});

export default UploadPhotoScreen;
