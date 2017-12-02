import React from "react";
import PropTypes from "prop-types";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  ScrollView
} from "react-native";
import SquarePhoto from "../../components/SquarePhoto";
import FitImage from "react-native-fit-image";
import { MaterialIcons } from "@expo/vector-icons";
import uuidv1 from "uuid/v1";

const { height, width } = Dimensions.get("window");

const PickPhotoScreen = props => (
  <View style={styles.container}>
    {props.photos && (
      <View style={styles.pictureContainer}>
        <FitImage
          source={{ uri: props.pickedPhoto.node.image.uri }}
          style={StyleSheet.absoluteFill}
        />
        <TouchableOpacity onPressOut={props.approvePhoto}>
          <View style={styles.approvePhoto}>
            <MaterialIcons name={"check-circle"} color="white" size={60} />
          </View>
        </TouchableOpacity>
      </View>
    )}
    {props.photos && (
      <View style={styles.photos}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {props.photos.map(photo => (
            <SquarePhoto
              onPress={() => props.pickPhoto(photo)}
              imageUrl={photo.node.image.uri}
              key={photo.node.timestamp + photo.node.image.uri}
            />
          ))}
        </ScrollView>
      </View>
    )}
  </View>
);

PropTypes.propTypes = {
  pickPhoto: PropTypes.func.isRequired,
  photos: PropTypes.array.isRequired,
  pickedPhoto: PropTypes.object.isRequired,
  approvePhoto: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  pictureContainer: {
    flex: 2,
    justifyContent: "flex-end"
  },
  pickedPhoto: {
    flex: 1
  },
  photos: {
    flex: 1
  },
  scrollContainer: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  approvePhoto: {
    width: 60,
    backgroundColor: "transparent",
    alignSelf: "flex-end",
    marginBottom: 10,
    marginRight: 10
  }
});

export default PickPhotoScreen;
