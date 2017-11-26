import React from "react";
import { Text, ScrollView, RefreshControl } from "react-native";

const HomeScreen = props => (
  <ScrollView
    refreshControl={
      <RefreshControl
        refreshing={props.isFetching}
        onRefresh={props.onRefresh}
        tintColor={"black"}
        title={props.isFetching ? "Refreshing" : "Refresh"}
        titleColor={"black"}
      />
    }
  />
);

export default HomeScreen;
