import React from "react";
import { Text, ScrollView, RefreshControl } from "react-native";

const HomeScreen = props => (
  <ScrollView>
    <RefreshControl
      refreshing={props.isFetching}
      onRefresh={props.onRefresh}
      tintColor={"black"}
      title={"Refresh"}
      titleColor={"black"}
      colors={"black"}
    />
  </ScrollView>
);

export default HomeScreen;
