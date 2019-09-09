import React from "react";
import { Nav, Ul, Li, InputForm } from "../../style/ConditionForm";
import { styles } from "../../style/formList";
import { SearchCategoryListFlame } from "../../style/StoreList";
import Choice from "../../containers/Form/Choice";
import Range from "../../containers/Form/RangeForm";
import Serchber from "../../containers/Serchber";

import DefaultCategoryList from "../../containers/Form/DefaultCategoryList";
import SearchCategoryList from "../../containers/Form/SearchCategoryList";
export default function DetailsForm(props) {
  function SetKeyWord(e) {
    props.changeFormKeyword(e.target.value);
  }
  function ChangeMode(e) {
    props.changeFormMode();
  }
  //キーワードが入力されてないとき用
  const { keyword } = props;
  const { SearchBtn, SerchBtnFlame } = styles;
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(64, 64, 64, 0.3)"
      }}
    >
      <div
        style={{
          overflow: "hidden",
          width: "100%",
          height: "60px",
          backgroundColor: "white"
        }}
      >
        <Nav>
          <Ul>
            <Range />
            <Choice />
            <Li>
              <div style={{ height: "40px", marginRight: "10px" }}>
                <InputForm
                  placeholder="キーワード"
                  value={keyword}
                  onChange={SetKeyWord}
                />
              </div>
            </Li>
          </Ul>
        </Nav>
      </div>
      <Serchber />

      <SearchCategoryListFlame

      >
        {keyword !== "" ? (
          <div style={{ width: "100%" }}>
            <SearchCategoryList />
            <SerchBtnFlame>
              <SearchBtn>
                <li onClick={ChangeMode}>
                  <span>Close lists</span>
                  <div>Search for</div>
                </li>
              </SearchBtn>
            </SerchBtnFlame>
          </div>
        ) : (
          <div>
            <DefaultCategoryList />
            <SerchBtnFlame>
              <SearchBtn>
                <li onClick={ChangeMode}>
                  <span>Search</span>
                  <div>Close lists</div>
                </li>
              </SearchBtn>
            </SerchBtnFlame>
          </div>
        )}
      </SearchCategoryListFlame>
    </div>
  );
}
