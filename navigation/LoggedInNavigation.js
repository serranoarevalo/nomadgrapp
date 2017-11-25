import React from "react";
import { TabNavigator, TabBarBottom } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
const LoggedInNavigation = TabNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Search: {
      screen: SearchScreen
    }
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: "bottom",
    swipeEnabled: true,
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: "white",
        height: 45
      }
    }
  }
);

export default LoggedInNavigation;
