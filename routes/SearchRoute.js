import { StackNavigator } from "react-navigation";
import AppRoutes, { options } from "./AppRoutes";
import SearchScreen from "../screens/SearchScreen";

const SearchRoute = StackNavigator(
  {
    Search: {
      screen: SearchScreen
    },
    ...AppRoutes
  },
  {
    ...options
  }
);

export default SearchRoute;
