import { connect } from "react-redux";
import Serachber from "../components/Serchber";

const mapStateToProps = state => ({
  comunication: state.rest.comunication
});

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Serachber);
