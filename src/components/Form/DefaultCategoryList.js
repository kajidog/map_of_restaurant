import React from "react";
import CategoryListForm from "./CategoryListForm";

export default function DefaultCategoryList(props) {
  function Display(hide, lavel) {
    let newHitTop = [];
    hide ? (newHitTop = [0, 1, 2, 3, 4]) : lavel.forEach((value, i) => newHitTop.push(i));
    return { hide: !hide, hitTop: newHitTop };
  }

  function displayC(e) {
    const display = Display(props.categoryC.hide, props.conditions.conditions);
    props.changeFormHide(display, "categoryC");
  }
  function displayS(e) {
    const display = Display(
      props.categoryS.hide,
      props.categorySData.category_s
    );
    props.changeFormHide(display, "categoryS");
  }
  function displayL(e) {
    const display = Display(
      props.categoryL.hide,
      props.categoryLData.category_l
    );
    props.changeFormHide(display, "categoryL");
  }

  function Add(e, category) {
    let hit = [];
    let flag = true;
    const target = category.hitTop[e.currentTarget.getAttribute("data-number")];
    category.choice.forEach(value => {
      if (value === target) flag = false;
      hit.push(value);
    });

    if (flag) {
      hit.push(target);
    } else {
      hit = hit.filter(n => n !== target);
    }
    return hit;
  }
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

  function AddConditionsTop(e) {
    const choice = Add(e, props.categoryC);
    const data = PrepareData(
      props.categoryS.choice,
      props.categoryL.choice,
      choice
    );
    props.deselect({ choice: choice, url: data.c }, "categoryC");
  }
  function AddCategorySTop(e) {
    const choice = Add(e, props.categoryS);
    const data = PrepareData(
      choice,
      props.categoryL.choice,
      props.categoryC.choice
    );
    props.deselect({ choice: choice, url: data.cs }, "categoryS");
  }
  function AddCategoryLTop(e) {
    const choice = Add(e, props.categoryL);
    const data = PrepareData(
      props.categoryS.choice,
      choice,
      props.categoryC.choice
    );
    props.deselect({ choice: choice, url: data.cl }, "categoryL");
  }

  const {
    categoryC,
    conditions,
    categoryS,
    categorySData,
    categorySErr,
    categorySComunication,
    categoryL,
    categoryLErr,
    categoryLComunication,
    categoryLData
  } = props;

  return (
    <>
      <CategoryListForm
        category={categoryC}
        hit={categoryC.hitTop}
        data={{ data: conditions }}
        action={AddConditionsTop}
        hide={displayC}
        tag={{ tag1: "conditions", tag2: "value" }}
        formHeading={"条件"}
      />
      <CategoryListForm
        category={categoryS}
        hit={categoryS.hitTop}
        data={{
          data: categorySData,
          err: categorySErr,
          comunication: categorySComunication
        }}
        action={AddCategorySTop}
        hide={displayS}
        tag={{ tag1: "category_s", tag2: "category_s_name" }}
        formHeading={"カテゴリーS"}
      />
      <CategoryListForm
        category={categoryL}
        hit={categoryL.hitTop}
        data={{
          data: categoryLData,
          err: categoryLErr,
          comunication: categoryLComunication
        }}
        action={AddCategoryLTop}
        hide={displayL}
        tag={{ tag1: "category_l", tag2: "category_l_name" }}
        formHeading={"カテゴリーL"}
      />
    </>
  );
}
