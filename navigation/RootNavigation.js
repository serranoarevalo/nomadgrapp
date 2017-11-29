import { StackNavigator } from "react-navigation";
import AddPhotoScreen from "../screens/AddPhotoScreen";
import TakePhotoScreen from "../screens/TakePhotoScreen";
import TabsNavigation from "./TabsNavigation";

const RootNavigator = StackNavigator(
  {
    MainTabNavigator: {
      screen: TabsNavigation
    },
    AddPhotoModal: {
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
