import { connect } from "react-redux";
import HitCategory from "../../components/Form/HitCategory";
import { Actions } from "../../actions/form";

const mapStateToProps = state => ({
  display: state.display.form,

  //カテゴリーS
  categoryC: state.conditionForm.categoryC,
  categoryS: state.conditionForm.categoryS,
  categoryL: state.conditionForm.categoryL,
  conditions: state.conditionForm.conditions,

  mode: state.conditionForm.mode,
  keyword: state.conditionForm.keyword
});

const mapDispatchToProps = dispatch => {
  return {
    changeFormKeyword: keyword => dispatch(Actions.changeFormKeyword(keyword))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HitCategory);
