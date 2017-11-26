import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as photoActions } from "../../redux/modules/photos";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getFeed: () => {
      dispatch(photoActions.getFeed());
    }
  };
};

const mapStateToProps = (state, ownProps) => {
  const { photos } = state;
  return {
    photos
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
