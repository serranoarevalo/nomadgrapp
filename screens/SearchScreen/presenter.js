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
import SearchBar from "../../components/SearchBar";

const SearchScreen = props => (
  <View style={styles.container}>
    <SearchBar
      value={props.inputText}
      onChangeText={props.onInputChange}
      onEndEditing={props.submitSearch}
    />
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={props.isFetching}
          onRefresh={props.onRefresh}
          tintColor={"black"}
          title={"Reload"}
          titleColor={"black"}
        />
      }
    />
  </View>
);

SearchScreen.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  submitSearch: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  searchingBy: PropTypes.string.isRequired,
  onRefresh: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: { flex: 1 }
});

export default SearchScreen;
