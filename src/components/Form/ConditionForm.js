import React from "react";
import DefaultForm from "../../containers/Form/defaultForm";
import DetailsForm from "../../containers/Form/DetailsForm";

export default function ConditionForm(props) {
  const { mode, display } = props;

  return (
    <div>
      {display ? (
        mode ? (
          //条件を入力するモード
          <DetailsForm />
        ) : (
          //最初のモード
          <DefaultForm />
        )
      ) : null}
    </div>
  );
}
