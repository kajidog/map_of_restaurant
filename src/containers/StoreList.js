import { connect } from "react-redux";
import SroreList from "../components/StoreList";
import { RestGet } from "../actions/Map";

const mapStateToProps = state => ({
  display: state.display.list,
  height: state.display.storeListHeight,
  expansion: state.display.expansion,
  response: state.rest.response,
  comunication: state.rest.comunication,
  perPge: state.rest.perPge,
  url: state.rest.add,
  err: state.rest.err,
  display_mode: state.display.display_mode
});

const mapDispatchToProps = dispatch => {
  return {
    ChangePage: (index, add, mode) => dispatch(RestGet(index, add, mode))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SroreList);
