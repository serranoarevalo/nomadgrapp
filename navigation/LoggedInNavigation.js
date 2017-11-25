import React from "react";
import { TabNavigator } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
const LoggedInNavigation = TabNavigator({
  Home: {
    screen: HomeScreen
  }
});

export default LoggedInNavigation;
