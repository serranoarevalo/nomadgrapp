import React, { Component } from "react";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import SearchScreen from "./presenter";

class Container extends Component {
  static navigationOptions = {
    headerTitle: "Search",
    headerStyle: {
      backgroundColor: "#FAFAFA",
      borderBottomWidth: 0
    }
  };
  static propTypes = {
    photoList: PropTypes.array,
    searchPhotos: PropTypes.func.isRequired
  };
  state = {
    isFetching: true,
    inputText: "",
    searchingBy: ""
  };
  componentDidMount() {
    const { photoList } = this.props;
    if (photoList) {
      this.setState({
        isFetching: false
      });
    }
  }
  componentWillReceiveProps = nextProps => {
    if (nextProps.photoList) {
      this.setState({
        isFetching: false
      });
    }
  };
  _submitSearch = () => {
    const { inputText, searchingBy } = this.state;
    const { searchPhotos } = this.props;
    searchPhotos(inputText);
    this.setState({
      searchingBy: inputText
    });
  };
  _handleInputChange = text => {
    this.setState({ inputText: text });
  };
  _handleRefresh = () => {
    const { searchPhotos } = this.props;
    const { searchingBy } = this.state;
    searchPhotos(searchingBy);
  };
  _onPhotoPress = () => {
    const { navigation: { navigate } } = this.props;
    navigate("Likes");
  };
  render() {
    const { photoList } = this.props;
    return (
      <SearchScreen
        {...this.state}
        submitSearch={this._submitSearch}
        onInputChange={this._handleInputChange}
        onRefresh={this._handleRefresh}
        photoList={photoList}
        onPhotoPress={this._onPhotoPress}
      />
    );
  }
}

export default Container;
