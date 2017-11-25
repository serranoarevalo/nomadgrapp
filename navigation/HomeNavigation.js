import { StackNavigator } from "react-navigation";
import FeedScreen from "../screens/FeedScreen";
import LikesScreen from "../screens/LikesScreen";
import CommentsScreen from "../screens/CommentsScreen";
import BackButton from "../components/BackButton";

const HomeNavigation = StackNavigator(
  {
    Feed: {
      screen: FeedScreen
    },
    Likes: {
      screen: LikesScreen
    }
  },
  {
    navigationOptions: {
      headerLeft: BackButton
    }
  }
);

export default HomeNavigation;
