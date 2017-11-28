import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "../../redux/modules/user";

const mapDispatchToProps = (dispatch, ownProps) => {
  const { user: { username } } = ownProps;
  return {
    getUserProfile: () => {
      dispatch(userActions.getUserProfile(username));
    }
  };
};
export default connect(null, mapDispatchToProps)(Container);
