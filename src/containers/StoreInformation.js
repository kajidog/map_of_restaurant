import { connect } from "react-redux";
import SroreList from "../components/StoreInformation";
import { GetToRestID } from "../actions/Map";
import { Back, chgangeStoreinMode } from "../actions/display";

const mapStateToProps = state => {
  return {
    display: state.display.info,
    data: state.storeInformation.info,
    display_mode: state.display.display_mode,
    state: state.display.state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    GetToRestID: id => dispatch(GetToRestID(id)),
    Default: () => dispatch(Back()),
    chgangeStoreinMode: mode => dispatch(chgangeStoreinMode(mode))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SroreList);
