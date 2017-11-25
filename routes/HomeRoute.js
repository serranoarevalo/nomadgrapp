import { StackNavigator } from "react-navigation";
import AppRoutes, { options } from "./AppRoutes";
import HomeScreen from "../screens/HomeScreen";

const HomeRoute = StackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    ...AppRoutes
  },
  {
    ...options
  }
);

export default HomeRoute;
