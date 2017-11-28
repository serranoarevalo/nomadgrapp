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
import Notification from "../../components/Notification";

const NotificationsScreen = props => (
  <View style={styles.container}>
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={props.isFetching}
          onRefresh={props.onRefresh}
          tintColor={"black"}
        />
      }
    >
      {props.notificationList && props.notificationList.length === 0 ? (
        <Text style={styles.notFound}>
          No notifications yet! Come back soon!
        </Text>
      ) : (
        <View style={styles.notificationsContainer}>
          {props.notificationList.map(notification => (
            <Notification key={notification.id} {...notification} />
          ))}
        </View>
      )}
    </ScrollView>
  </View>
);

NotificationsScreen.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  onRefresh: PropTypes.func.isRequired,
  notificationList: PropTypes.array
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  notificationsContainer: {
    flex: 1
  },
  notFound: {
    color: "#999",
    fontWeight: "600",
    alignSelf: "center",
    marginTop: 20
  }
});

export default NotificationsScreen;
