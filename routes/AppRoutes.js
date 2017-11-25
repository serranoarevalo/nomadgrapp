import LikesScreen from "../screens/LikesScreen";
import BackButton from "../components/BackButton";

const AppRoutes = {
  Likes: {
    screen: LikesScreen
  }
};

const options = {
  navigationOptions: {
    headerLeft: BackButton
  }
};

export { options };

export default AppRoutes;
