import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  StyleSheet
} from "react-native";
import Photo from "../../components/Photo";

const HomeScreen = props => (
  <ScrollView
    refreshControl={
      <RefreshControl
        refreshing={props.isFetching}
        onRefresh={props.onRefresh}
        tintColor={"black"}
      />
    }
    style={styles.container}
  >
    <View style={styles.container}>
      {props.photoList &&
        props.photoList.map(photo => <Photo {...photo} key={photo.id} />)}
    </View>
  </ScrollView>
);

HomeScreen.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  onRefresh: PropTypes.func.isRequired,
  photoList: PropTypes.array
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingBottom: 20, backgroundColor: "white" }
});

export default HomeScreen;
