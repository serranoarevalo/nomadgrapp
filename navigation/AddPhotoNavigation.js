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
      style: {
        backgroundColor: "white",
        alignItems: "center"
      },
      labelStyle: {
        color: "black",
        fontSize: 14,
        fontWeight: "600"
      },
      showIcon: false
    }
  }
);

export default AddPhotoNavigation;
