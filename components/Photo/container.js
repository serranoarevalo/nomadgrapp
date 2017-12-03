import React, { Component } from "react";
import PropTypes from "prop-types";
import Photo from "./presenter";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = { isLiked: props.is_liked, likeCount: props.like_count };
  }
  static propTypes = {
    dispatchLike: PropTypes.func.isRequired,
    is_liked: PropTypes.bool.isRequired,
    like_count: PropTypes.number.isRequired
  };
  render() {
    return (
      <Photo {...this.props} {...this.state} handlePress={this._handlePress} />
    );
  }
  _handlePress = async () => {
    const { dispatchLike } = this.props;
    const { isLiked } = this.state;
    const action = dispatchLike(isLiked);
    if (isLiked) {
      this.setState(prevState => {
        return {
          isLiked: false,
          likeCount: prevState.likeCount - 1
        };
      });
    } else {
      this.setState(prevState => {
        return { isLiked: true, likeCount: prevState.likeCount + 1 };
      });
    }
  };
}

export default Container;
