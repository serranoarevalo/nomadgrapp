import React from "react";
import { Button } from "react-native";
import { StackNavigator } from "react-navigation";
import AddPhotoScreen from "../screens/AddPhotoScreen";
import TakePhotoScreen from "../screens/TakePhotoScreen";
import UploadPhotoScreen from "../screens/UploadPhotoScreen";
import TabsNavigation from "./TabsNavigation";

const RootNavigator = StackNavigator(
  {
    MainTabNavigator: {
      screen: TabsNavigation,
      navigationOptions: {
        header: null
      }
    },
    AddPhotoModal: {
      screen: AddPhotoScreen,
      navigationOptions: {
        gesturesEnabled: true,
        header: null
      }
    },
    UploadPhotoModal: {
      screen: UploadPhotoScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Upload Photo",
        headerLeft: (
          <Button title="Cancel" onPress={() => navigation.goBack(null)} />
        )
      })
    }
  },
  {
    mode: "modal"
  }
);

export default RootNavigator;
