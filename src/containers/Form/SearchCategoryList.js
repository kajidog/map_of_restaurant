import { connect } from "react-redux";
import SearchCategoryList from "../../components/Form/SearchCategoryList";
import { Actions } from "../../actions/form";
import { RestGet } from "../../actions/Map";

const mapStateToProps = state => ({
  display: state.display.form,

  categoryC: state.conditionForm.categoryC,
  categoryS: state.conditionForm.categoryS,
  categoryL: state.conditionForm.categoryL,
  conditions: state.conditionForm.conditions,
  //カテゴリーS
  categorySData: state.categoryS.data,
  categorySComunication: state.categoryS.comunication,
  categorySErr: state.categoryS.err,

  //カテゴリL
  categoryLData: state.categoryL.data,
  categoryLComunication: state.categoryL.comunication,
  categoryLErr: state.categoryL.err,

  mode: state.conditionForm.mode,
  keyword: state.conditionForm.keyword,
  range: state.conditionForm.range,
  //現在地
  lat: state.events.latlng.lat,
  lng: state.events.latlng.lng
});

const mapDispatchToProps = dispatch => {
  return {
    RestGet: (index, add) => dispatch(RestGet(index, add)),
    deselect: (data, category) => dispatch(Actions.deselect(data, category)),
    changeFormHide: (display, type) =>
      dispatch(Actions.changeFormHide(display, type)),
    changeFormMode: () => dispatch(Actions.changeFormMode())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchCategoryList);
