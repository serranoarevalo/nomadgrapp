import { StackNavigator } from "react-navigation";
import AddPhotoScreen from "../screens/ProfileScreen";
import LoggedInNavigation from "./LoggedInNavigation";

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
