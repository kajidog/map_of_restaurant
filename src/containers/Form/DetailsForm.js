import { connect } from "react-redux";
import DetailsForm from "../../components/Form/DetailsForm";
import { Actions } from "../../actions/form";
import { Default } from "../../actions/display";

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
  keyword: state.conditionForm.keyword
});

const mapDispatchToProps = dispatch => {
  return {
    changeFormMode: () => dispatch(Actions.changeFormMode()),
    changeFormKeyword: keyword => dispatch(Actions.changeFormKeyword(keyword)),
    Default: () => dispatch(Default())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsForm);
