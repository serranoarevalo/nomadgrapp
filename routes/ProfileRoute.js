import { StackNavigator } from "react-navigation";
import AppRoutes, { options } from "./AppRoutes";
import ProfileScreen from "../screens/ProfileScreen";

const ProfileRoute = StackNavigator(
  {
    Profile: {
      screen: ProfileScreen
    },
    ...AppRoutes
  },
  {
    ...options
  }
);

export default ProfileRoute;
