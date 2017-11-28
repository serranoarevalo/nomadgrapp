import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  StyleSheet,
  TextInput,
  Dimensions
} from "react-native";
import SquarePhoto from "../../components/SquarePhoto";

const SearchScreen = props => (
  <View style={styles.container}>
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={props.isFetching}
          onRefresh={props.onRefresh}
          tintColor={"black"}
        />
      }
    >
      {props.photoList.length === 0 && props.searchingBy.length > 1 ? (
        <Text style={styles.notFound}>
          No images found for {props.searchingBy}
        </Text>
      ) : (
        <View style={styles.photosContainer}>
          {props.photoList.map(photo => (
            <SquarePhoto key={photo.id} imageUrl={photo.file} />
          ))}
        </View>
      )}
    </ScrollView>
  </View>
);

SearchScreen.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  submitSearch: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  searchingBy: PropTypes.string.isRequired,
  onRefresh: PropTypes.func.isRequired,
  photoList: PropTypes.array
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  photosContainer: {
    flexDirection: "row",
    flex: 1
  },
  notFound: {
    color: "#999",
    fontWeight: "600",
    alignSelf: "center",
    marginTop: 20
  }
});

export default SearchScreen;
