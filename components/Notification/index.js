import { connect } from "react-redux";
import { actionCreators as userActions } from "../../redux/modules/user";
import Notification from "./presenter";

const mapDispatchToProps = (dispatch, ownProps) => {
  const { creator: { id } } = ownProps;
  return {
    followUser: () => {
      return dispatch(userActions.followUser(id));
    },
    unfollowUser: () => {
      return dispatch(userActions.unfollowUser(id));
    }
  };
};

export default connect(null, mapDispatchToProps)(Notification);
