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
  static defaultProps = {
    photoList: []
  };
  state = {
    isFetching: true,
    inputText: "",
    searchingBy: ""
  };
  componentDidMount() {
    const { photoList, navigation, searchPhotos } = this.props;
    const { inputText } = this.state;
    if (photoList) {
      this.setState({
        isFetching: false
      });
    } else {
      searchPhotos("");
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
    this.setState({
      isFetching: true
    });
    searchPhotos(text.toLowerCase());
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
    searchPhotos(searchingBy.toLowerCase());
  };
  render() {
    const { photoList, navigation: { navigate } } = this.props;
    return (
      <SearchScreen
        {...this.state}
        submitSearch={this._submitSearch}
        onInputChange={this._handleInputChange}
        onRefresh={this._handleRefresh}
        photoList={photoList}
        navigate={navigate}
      />
    );
  }
}

export default Container;
