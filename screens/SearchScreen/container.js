import React, { Component } from "react";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import SearchScreen from "./presenter";

class Container extends Component {
  static navigationOptions = {
    header: null
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
  render() {
    const { navigate } = this.props.navigation;
    return (
      <SearchScreen
        navigate={navigate}
        {...this.state}
        submitSearch={this._submitSearch}
        onInputChange={this._handleInputChange}
        onRefresh={this._handleRefresh}
      />
    );
  }
}

export default Container;
