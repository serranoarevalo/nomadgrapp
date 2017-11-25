import { StackNavigator } from "react-navigation";
import AddPhotoScreen from "../screens/ProfileScreen";
import TabsNavigation from "./TabsNavigation";

const RootNavigator = StackNavigator(
  {
    MainTabNavigator: {
      screen: TabsNavigation
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
