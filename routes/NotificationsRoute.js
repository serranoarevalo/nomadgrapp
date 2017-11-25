import { StackNavigator } from "react-navigation";
import AppRoutes, { options } from "./AppRoutes";
import NotificationsScreen from "../screens/NotificationsScreen";

const NotificationsRoute = StackNavigator(
  {
    Notifications: {
      screen: NotificationsScreen
    },
    ...AppRoutes
  },
  {
    ...options
  }
);

export default NotificationsRoute;
