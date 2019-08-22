import React from "react";
import Choice from "../../containers/Form/Choice";
import Range from "../../containers/Form/RangeForm";

import { Nav, Ul, Li, TextBox1 } from "../../style/ConditionForm";

export default function DefaultForm(props) {
  function ChangeMode(e) {
    props.changeFormMode();
    props.FormExpansion();
  }
  return (
    <div style={{ overflow: "hidden", width: "100%", height: "60px" }}>
      <Nav>
        <Ul>
          <Li>
            <div style={{ height: "40px", marginRight: "10px" }}>
              <h4 style={{ margin: "0", padding: "10px" }}>レストラン検索</h4>
            </div>
          </Li>
          <Range />
          <Choice />
          <Li>
            <div
              style={{ height: "40px", marginRight: "10px" }}
              onClick={ChangeMode}
            >
              <TextBox1>絞り込み</TextBox1>
            </div>
          </Li>
        </Ul>
      </Nav>
    </div>
  );
}
