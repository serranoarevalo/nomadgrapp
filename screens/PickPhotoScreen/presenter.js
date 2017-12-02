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
import uuidv1 from "uuid/v1";

const { height, width } = Dimensions.get("window");

const PickPhotoScreen = props => (
  <View style={styles.container}>
    {props.photos && (
      <View style={styles.pictureContainer}>
        <FitImage
          source={{ uri: props.pickedPhoto.node.image.uri }}
          style={styles.pickedPhoto}
        />
      </View>
    )}
    {props.photos && (
      <View style={styles.photos}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {props.photos.map(photo => (
            <SquarePhoto
              onPress={() => props.pickPhoto(photo)}
              imageUrl={photo.node.image.uri}
              key={photo.node.timestamp + uuidv1()}
            />
          ))}
        </ScrollView>
      </View>
    )}
  </View>
);

PropTypes.propTypes = {
  pickPhoto: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  pictureContainer: {
    flex: 2
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
  }
});

export default PickPhotoScreen;
