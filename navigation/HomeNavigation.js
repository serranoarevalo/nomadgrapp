import { StackNavigator } from "react-navigation";
import FeedScreen from "../screens/FeedScreen";
import LikesScreen from "../screens/LikesScreen";
import CommentsScreen from "../screens/CommentsScreen";

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
    headerMode: "float"
  }
);

export default HomeNavigation;
