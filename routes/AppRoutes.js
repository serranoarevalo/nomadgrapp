import React from "react";
import LikesScreen from "../screens/LikesScreen";
import NavButton from "../components/NavButton";

const AppRoutes = {
  Likes: {
    screen: LikesScreen
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
