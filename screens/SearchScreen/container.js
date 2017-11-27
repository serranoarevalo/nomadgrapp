import React, { Component } from "react";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import SearchScreen from "./presenter";
import SearchBar from "../../components/SearchBar";

class Container extends Component {
  static navigationOptions = ({ navigation, screenProps }) => {
    const { params = {} } = navigation.state;
    return {
      headerTitle: <SearchBar submit={text => params.submitSearch(text)} />
    };
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
    const { photoList, navigation } = this.props;
    const { inputText } = this.state;
    if (photoList) {
      this.setState({
        isFetching: false
      });
    }
    navigation.setParams({
      submitSearch: this._submitSearch
    });
  }
  componentWillReceiveProps = nextProps => {
    if (nextProps.photoList) {
      this.setState({
        isFetching: false
      });
    }
  };
  _submitSearch = text => {
    const { searchingBy } = this.state;
    const { searchPhotos } = this.props;
    searchPhotos(text);
    this.setState({
      searchingBy: text
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
