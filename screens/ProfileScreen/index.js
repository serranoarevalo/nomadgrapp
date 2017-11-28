import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "../../redux/modules/user";

const mapStateToProps = (state, ownProps) => {
  const { user } = state;
  return {
    profile: user.profile
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getUserProfile: username => {
      dispatch(userActions.getUserProfile(username, true));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
