import React from "react";
import { View } from "react-native";
import { TabNavigator, TabBarTop } from "react-navigation";
import TakePhotoScreen from "../screens/TakePhotoScreen";
import PickPhotoScreen from "../screens/PickPhotoScreen";

const AddPhotoNavigation = TabNavigator(
  {
    TakePhoto: {
      screen: TakePhotoScreen,
      navigationOptions: {
        tabBarLabel: "Photo"
      }
    },
    PickPhoto: {
      screen: PickPhotoScreen,
      navigationOptions: {
        tabBarLabel: "Library"
      }
    }
  },
  {
    tabBarPosition: "top",
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      showLabel: true,
      upperCaseLabel: true,
      activeTintColor: "black",
      inactiveTintColor: "#999",
      style: {
        backgroundColor: "white",
        alignItems: "center"
      },
      labelStyle: {
        fontSize: 14,
        fontWeight: "600"
      },
      showIcon: false
    }
  }
);

export default AddPhotoNavigation;
