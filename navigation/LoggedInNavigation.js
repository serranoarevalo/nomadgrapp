import React from "react";
import { TabNavigator, TabBarBottom } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import AddPhotoLink from "../screens/AddPhotoLink";
import NotificationScreen from "../screens/NotificationScreen";
import ProfileScreen from "../screens/ProfileScreen";

const TabsNavigation = TabNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Search: {
      screen: SearchScreen
    },
    AddPhotoLink: {
      screen: AddPhotoLink,
    },
    Notification: {
      screen: NotificationScreen
    },
    Profile: {
      screen: ProfileScreen
    },
  },
  {
    tabBarComponent: ({jumpToIndex, ...props, navigation}) => (
      <TabBarBottom
          {...props}
          jumpToIndex={index => {
              if (index === 2) {
                  navigation.navigate('AddPhoto')
              }
              else {
                  jumpToIndex(index)
              }
          }}
      />
    ),
    tabBarPosition: "bottom",
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: "#FAFAFA",
        height: 45
      }
    }
  }
);

export default TabsNavigation;
