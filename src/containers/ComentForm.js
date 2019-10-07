import { connect } from "react-redux";
import ComentForm from "../components/storeReview/ComentForm";
import { addComments } from "../actions/coment";

const mapStateToProps = state => ({
  storeId: state.storeInformation.info.id
});

const mapDispatchToProps = dispatch => {
  return {
    addComments: comment => dispatch(addComments(comment))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComentForm);
