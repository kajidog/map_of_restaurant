import { connect } from "react-redux";
import SroreReview from "../components/storeReview";

const mapStateToProps = state => {
  return {
    display: state.display.info,
    coments: state.storeInformation.coments,
    display_mode: state.display.display_mode,
    state: state.display.state
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SroreReview);
