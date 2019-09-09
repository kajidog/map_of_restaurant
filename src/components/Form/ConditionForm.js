import React from "react";
import DefaultForm from "../../containers/Form/defaultForm";
import DetailsForm from "../../containers/Form/DetailsForm";
export default function ConditionForm(props) {
  const { mode } = props;

  return (
    <div style={{ position: "fixed", top: "0", left: "0", width: "100%" }}>
      {mode ? (
        //条件を入力するモード
        <DetailsForm />
      ) : (
        //最初のモード
        <DefaultForm />
      )}
    </div>
  );
}
