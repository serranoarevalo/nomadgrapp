import React from "react";
import { TabNavigator, TabBarBottom, StackNavigator } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import AddPhotoScreen from "../screens/AddPhotoScreen";
import AddPhotoLink from "../screens/AddPhotoLink";
const LoggedInNavigation = TabNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Search: {
      screen: SearchScreen
    },
    AddPhotoLink: {
      screen: AddPhotoLink,
    }
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
        backgroundColor: "white",
        height: 45
      }
    }
  }
);

const RootNavigator = StackNavigator(
  {
    MainTabNavigator: {
      screen: LoggedInNavigation
    },
    AddPhoto: {
      screen: AddPhotoScreen,
      navigationOptions: {
        gesturesEnabled: true
      }
    }
  },
  {
    headerMode: "none",
    mode: "modal"
  }
);

export default RootNavigator;
