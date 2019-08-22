import { connect } from "react-redux";
import Choice from "../../components/Form/Choice";
import { Actions } from "../../actions/form";
import { RestGet } from "../../actions/Map";

const mapStateToProps = state => ({
  categoryC: state.conditionForm.categoryC,
  categoryS: state.conditionForm.categoryS,
  categoryL: state.conditionForm.categoryL,
  conditions: state.conditionForm.conditions,
  mode: state.conditionForm.mode,
  range: state.conditionForm.range,
  rangeValue: state.conditionForm.rangeValue,
  //現在地
  lat: state.events.latlng.lat,
  lng: state.events.latlng.lng,

  categoryLData: state.categoryL.data,
  categorySData: state.categoryS.data
});

const mapDispatchToProps = dispatch => {
  return {
    RestGet: (index, add) => dispatch(RestGet(index, add)),
    deselect: (data, category) => dispatch(Actions.deselect(data, category))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Choice);
