import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as photoActions } from "../../redux/modules/photos";

const mapStateToProps = (state, ownProps) => {
  const { photos: { searchPhotos } } = state;
  return { photoList: searchPhotos };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    searchPhotos: (term = "") => {
      if (term.length === 0) {
        dispatch(photoActions.getSearch());
      } else {
        dispatch(photoActions.searchByTerm(term));
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
