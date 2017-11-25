import { StackNavigator } from "react-navigation";
import LoginScreen from "../screens/LoginScreen";

const LoggedOutNavigation = StackNavigator({
  LogIn: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  }
});

export default LoggedOutNavigation;
