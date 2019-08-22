import React from "react";
import { ConditionsButton, Li } from "../../style/ConditionForm";

export default function Choice(props) {
  //urlを作ってレストラン情報を取得
  function PrepareData(categorySChoice, categoryLChoice, conditionsChoice) {
    let categoryS = "";
    categorySChoice.forEach((value, i) => {
      if (i !== 0) categoryS = categoryS + ",";
      categoryS = categoryS + props.categorySData.category_s[value].category_s_code;
    });
    if (categoryS !== "") {
      categoryS = "&category_s=" + categoryS;
    }
    let categoryL = "";
    categoryLChoice.forEach((value, i) => {
      if (i !== 0) categoryL = categoryL + ",";
      categoryL = categoryL + props.categoryLData.category_l[value].category_l_code;
    });
    if (categoryL !== "") {
      categoryL = "&category_l=" + categoryL;
    }
    let categoryC = "";
    conditionsChoice.forEach((value, i) => {
      categoryC += "&" + props.conditions.conditions[value].para + "=1";
    });
    //データを送る
    props.RestGet({ hit_per_page: 100 }, [
      "&range=" + props.range,
      "&latitude=" + props.lat,
      "&longitude=" + props.lng,
      categoryS,
      categoryL,
      categoryC
    ]);
    return { c: categoryC, cs: categoryS, cl: categoryL };
  }
  //選択解除
  function Deselect(e) {
    const choice = props.categoryC.choice.filter(
      n => n !== e.currentTarget.getAttribute("data-number") - 0
    );
    const data = PrepareData(
      props.categoryS.choice,
      props.categoryL.choice,
      choice
    );
    props.deselect({ choice: choice, url: data.c }, "categoryC");
  }

  //選択解除
  function DeselectCategoryS(e) {
    const choice = props.categoryS.choice.filter(
      n => n !== e.currentTarget.getAttribute("data-number") - 0
    );
    const data = PrepareData(
      choice,
      props.categoryL.choice,
      props.categoryC.choice
    );
    props.deselect({ choice: choice, url: data.cs }, "categoryS");
  }
  //選択解除
  function DeselectCategoryL(e) {
    const choice = props.categoryL.choice.filter(
      n => n !== e.currentTarget.getAttribute("data-number") - 0
    );
    const data = PrepareData(
      props.categoryS.choice,
      choice,
      props.categoryC.choice
    );
    props.deselect({ choice: choice, url: data.cl }, "categoryL");
  }

  const {
    conditions,
    categoryC,
    categoryL,
    categoryS,
    categorySData,
    categoryLData
  } = props;
  return (
    <div style={{ display: "flex" }}>
      {categoryC.choice.map((value, i) => (
        <Li key={i}>
          <ConditionsButton data-number={value} onClick={Deselect}>
            {conditions.conditions[value].value}
          </ConditionsButton>
        </Li>
      ))}
      {categoryS.choice.map((value, i) => (
        <Li key={i}>
          <ConditionsButton data-number={value} onClick={DeselectCategoryS}>
            {categorySData.category_s[value].category_s_name}
          </ConditionsButton>
        </Li>
      ))}
      {categoryL.choice.map((value, i) => (
        <Li key={i}>
          <ConditionsButton data-number={value} onClick={DeselectCategoryL}>
            {categoryLData.category_l[value].category_l_name}
          </ConditionsButton>
        </Li>
      ))}
    </div>
  );
}
