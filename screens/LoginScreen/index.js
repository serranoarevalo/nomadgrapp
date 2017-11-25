import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "../../redux/modules/user";

const mapStateToProps = (state, ownProps) => {
  const { ui } = state;
  return { isSubmitting: ui.isFetching };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (username, password) => {
      dispatch(userActions.login(username, password));
    },
    fbLogin: () => {
      dispatch(userActions.facebookLogin());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
