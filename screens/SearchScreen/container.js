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
    searchPhotos(text);
    this.setState({
      searchingBy: text,
      isFetching: true
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
  render() {
    const { photoList } = this.props;
    return (
      <SearchScreen
        {...this.state}
        submitSearch={this._submitSearch}
        onInputChange={this._handleInputChange}
        onRefresh={this._handleRefresh}
        photoList={photoList}
      />
    );
  }
}

export default Container;
