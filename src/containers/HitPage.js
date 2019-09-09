import { connect } from "react-redux";
import HitPage from "../components/HitPage";
import { ClickShop } from "../actions/Map";
import {loacdComment} from "../actions/coment"
import { Information, Map, chgangeStoreinMode } from "../actions/display";

const mapStateToProps = state => ({
  response: state.rest.response,
  comunication: state.rest.comunication,
  display_mode: state.display.display_mode
});

const mapDispatchToProps = dispatch => {
  return {
    ClickShop: (name, lat, lng) => dispatch(ClickShop(name, lat, lng)),
    Information: data => dispatch(Information(data)),
    Map: () => dispatch(Map()),
    getCommemts: (storeId)=> dispatch(loacdComment(storeId)),
    chgangeStoreinMode: mode => dispatch(chgangeStoreinMode(mode))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HitPage);
