import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as photoActions } from "../../redux/modules/photos";

const mapStateToProps = (state, ownProps) => {
  const { photos } = state;
  return {
    feed: photos.feed
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getFeed: () => {
      dispatch(photoActions.getFeed());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
