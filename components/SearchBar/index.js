import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get("window").width;

class SearchBar extends Component {
  static propType = {
    submit: PropTypes.func.isRequired
  };
  state = {
    value: ""
  };
  _handleTextChange = text => {
    this.setState({
      value: text
    });
  };
  _handleSubmit = () => {
    const { submit } = this.props;
    const { value } = this.state;
    submit(value);
  };
  render() {
    const { value } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          placeholder={"Search"}
          style={styles.searchBar}
          returnKeyType={"search"}
          onChangeText={this._handleTextChange}
          value={value}
          onEndEditing={this._handleSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAFAFA",
    width,
    justifyContent: "flex-end",
    paddingLeft: 10,
    paddingRight: 10,
    height: 45,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "rgba(0, 0, 0, .3)"
  },
  searchBar: {
    height: 30,
    marginBottom: 10,
    borderRadius: 4,
    backgroundColor: "#EDEDEF",
    padding: 5
  }
});

export default SearchBar;
