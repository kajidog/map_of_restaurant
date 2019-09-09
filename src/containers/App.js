import { connect } from "react-redux";
import App from "../App";
import { getCurrentLocation } from "../actions/Map";
import { Actions } from "../actions/display";

const mapStateToProps = state => ({
  display: state.display.list,
  display_mode: state.display.display_mode,
  response: state.rest.response

});

const mapDispatchToProps = dispatch => {
  return {
    getCurrentLocation: () => dispatch(getCurrentLocation()),
    change_display_mode: mode => dispatch(Actions.change_display_mode(mode))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
