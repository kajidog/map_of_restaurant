import { connect } from "react-redux";
import App from "../App";
import { getCurrentLocation } from "../actions/Map";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    getCurrentLocation: () => dispatch(getCurrentLocation())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);