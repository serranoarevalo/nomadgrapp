import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as uiActions } from "../../redux/modules/ui";

const mapStateToProps = (state, ownProps) => {
  const { ui } = state;
  return { isSubmitting: ui.isFetching };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    startFetching: () => {
      dispatch(uiActions.setFetching());
    },
    stopFetching: () => {
      dispatch(uiActions.unsetFetching());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
