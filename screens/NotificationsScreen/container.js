import React, { Component } from "react";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import NotificationsScreen from "./presenter";

class Container extends Component {
  static navigationOptions = {
    headerTitle: "Notifications"
  };
  static propTypes = {
    notificationList: PropTypes.array,
    getNotifications: PropTypes.func.isRequired
  };
  static defaultProps = {
    notificationList: []
  };
  state = {
    isFetching: true
  };
  _getNotifications = () => {
    const { getNotifications } = this.props;
    getNotifications();
    this.setState({
      isFetching: true
    });
  };
  componentDidMount = () => {
    const { notificationList } = this.props;
    if (notificationList) {
      this.setState({
        isFetching: false
      });
    } else {
      this._getNotifications();
    }
  };
  componentWillReceiveProps = nextProps => {
    if (nextProps.notificationList) {
      this.setState({
        isFetching: false
      });
    }
  };

  render() {
    const { notificationList } = this.props;
    return (
      <NotificationsScreen
        notificationList={notificationList}
        {...this.state}
        onRefresh={this._getNotifications}
      />
    );
  }
}

export default Container;
