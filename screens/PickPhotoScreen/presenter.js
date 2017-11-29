import React from "react";
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
              onPress={() => {}}
              imageUrl={photo.node.image.uri}
              key={photo.node.timestamp}
            />
          ))}
        </ScrollView>
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1 },
  pictureContainer: {
    flex: 1
  },
  pickedPhoto: {
    flex: 2
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
