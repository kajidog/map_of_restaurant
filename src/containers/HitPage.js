import { connect } from "react-redux";
import HitPage from "../components/HitPage";
import { ClickShop } from "../actions/Map";
import { Information, Map } from "../actions/display";

const mapStateToProps = state => ({
  response: state.rest.response,
  comunication: state.rest.comunication
});

const mapDispatchToProps = dispatch => {
  return {
    ClickShop: (name, lat, lng) => dispatch(ClickShop(name, lat, lng)),
    Information: data => dispatch(Information(data)),
    Map: () => dispatch(Map())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HitPage);
