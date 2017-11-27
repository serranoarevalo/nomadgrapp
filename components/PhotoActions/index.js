import { connect } from "react-redux";
import PhotoActions from "./presenter";
import { actionCreators as photoActions } from "../../redux/modules/photos";

const mapDispatchToProps = (dispatch, ownProps) => {
  const { photoId, isLiked } = ownProps;
  return {
    handlePress: () => {
      if (isLiked) {
        dispatch(photoActions.unlikePhoto(photoId));
      } else {
        dispatch(photoActions.likePhoto(photoId));
      }
    }
  };
};

export default connect(null, mapDispatchToProps)(PhotoActions);
