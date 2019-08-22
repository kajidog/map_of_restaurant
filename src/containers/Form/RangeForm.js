import { connect } from "react-redux";
import RangeForm from "../../components/Form/RangeForm";
import { Actions } from "../../actions/form";
import { RestGet } from "../../actions/Map";

const mapStateToProps = state => ({
  range: state.conditionForm.range,
  rangeValue: state.conditionForm.rangeValue,
  categoryC: state.conditionForm.categoryC,
  categoryS: state.conditionForm.categoryS,
  categoryL: state.conditionForm.categoryL,

  //現在地
  lat: state.events.latlng.lat,
  lng: state.events.latlng.lng
});

const mapDispatchToProps = dispatch => {
  return {
    RestGet: (index, add) => dispatch(RestGet(index, add)),
    changeRange: (range, rangeValue) =>
      dispatch(Actions.changeRange(range, rangeValue))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RangeForm);
