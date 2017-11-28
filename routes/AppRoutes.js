import React from "react";
import LikesScreen from "../screens/LikesScreen";
import PhotoDetailScreen from "../screens/PhotoDetailScreen";
import CommentsScreen from "../screens/CommentsScreen";
import ProfileDetailScreen from "../screens/ProfileDetailScreen";
import NavButton from "../components/NavButton";

const AppRoutes = {
  Likes: {
    screen: LikesScreen
  },
  PhotoDetail: {
    screen: PhotoDetailScreen
  },
  Comments: {
    screen: CommentsScreen
  },
  ProfileDetail: {
    screen: ProfileDetailScreen,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.user.username}`
    })
  }
};

const options = {
  navigationOptions: {
    headerLeft: props => <NavButton iconName="ios-arrow-back" {...props} />,
    headerStyle: {
      backgroundColor: "#FAFAFA"
    }
  }
};

export { options };

export default AppRoutes;
