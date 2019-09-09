import React from "react";
import Choice from "../../containers/Form/Choice";
import Range from "../../containers/Form/RangeForm";
import Serchber from "../../containers/Serchber";

import { Nav, Ul, Li, TextBox1 } from "../../style/ConditionForm";

export default function DefaultForm(props) {
  function ChangeMode(e) {
    props.changeFormMode();
    props.FormExpansion();
  }
  return (
    <>
      <div style={{ overflow: "hidden", width: "100%", height: "60px" }}>
        <Nav>
          <Ul>
            <Range />
            <Choice />
            <Li>
              <TextBox1 onClick={ChangeMode}>絞り込み</TextBox1>
            </Li>
          </Ul>
        </Nav>
      </div>
      <Serchber />
    </>
  );
}
