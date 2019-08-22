import React from "react";
import { Nav, Ul, Li, InputForm, SearchBtn } from "../../style/ConditionForm";
import Choice from "../../containers/Form/Choice";
import Range from "../../containers/Form/RangeForm";
import DefaultCategoryList from "../../containers/Form/DefaultCategoryList";
import SearchCategoryList from "../../containers/Form/SearchCategoryList";
export default function DetailsForm(props) {
  function SetKeyWord(e) {
    props.changeFormKeyword(e.target.value);
  }
  function ChangeMode(e) {
    props.changeFormMode();
    props.Default();
  }
  //キーワードが入力されてないとき用
  const { keyword } = props;

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <div style={{ overflow: "hidden", width: "100%", height: "60px" }}>
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

      <div
        style={{
          width: "100%",
          backgroundColor: "white",
          height: "calc(100% - 60px)",
          overflowY: "scroll"
        }}
      >
        {keyword !== "" ? (
          <div style={{ width: "100%" }}>
            <SearchCategoryList />
            <SearchBtn type="button" onClick={ChangeMode}>
              検索
            </SearchBtn>
          </div>
        ) : (
          <div>
            <DefaultCategoryList />
            <SearchBtn type="button" onClick={ChangeMode}>
              検索
            </SearchBtn>
          </div>
        )}
      </div>
    </div>
  );
}
