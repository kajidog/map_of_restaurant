import { connect } from "react-redux";
import defaultForm from "../../components/Form/defaultForm";
import { Actions } from "../../actions/form";
import { FormExpansion } from "../../actions/display";
const mapStateToProps = state => ({
  display: state.display.form,

  //カテゴリーS
  categoryC: state.conditionForm.categoryC,
  categoryS: state.conditionForm.categoryS,
  categoryL: state.conditionForm.categoryL,
  conditions: state.conditionForm.conditions,
  mode: state.conditionForm.mode
});

const mapDispatchToProps = dispatch => {
  return {
    changeFormMode: () => dispatch(Actions.changeFormMode()),
    FormExpansion: () => dispatch(FormExpansion())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(defaultForm);
