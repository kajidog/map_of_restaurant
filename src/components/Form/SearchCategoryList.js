import React from "react";
import HitCategory from "./HitCategory";

export default function SearchCategoryList(props) {
  function Add(e, category, mode = 0) {
    let a = [];
    let b = true;
    const c = category.hit[e.currentTarget.getAttribute("data-number")];
    category.choice.forEach(value => {
      if (value === c) b = false;
      a.push(value);
    });

    if (b) {
      a.push(c);
    } else {
      a = a.filter(n => n !== c);
    }
    return a;
  }
  function PrepareData(categorySChoice, categoryLChoice, conditionsChoice) {
    let a = "";
    categorySChoice.forEach((value, i) => {
      if (i !== 0) a = a + ",";
      a = a + props.categorySData.category_s[value].category_s_code;
    });
    if (a !== "") {
      a = "&category_s=" + a;
    }
    let b = "";
    categoryLChoice.forEach((value, i) => {
      if (i !== 0) b = b + ",";
      b = b + props.categoryLData.category_l[value].category_l_code;
    });
    if (b !== "") {
      b = "&category_l=" + b;
    }
    let c = "";
    conditionsChoice.forEach((value, i) => {
      c += "&" + props.conditions.conditions[value].para + "=1";
    });
    //データを送る
    props.RestGet({ hit_per_page: 100 }, [
      "&range=" + props.range,
      "&latitude=" + props.lat,
      "&longitude=" + props.lng,
      a,
      b,
      c
    ]);
    return { c: c, cs: a, cl: b };
  }

  function AddConditionsTop(e) {
    const choice = Add(e, props.categoryC, 1);
    const data = PrepareData(
      props.categoryS.choice,
      props.categoryL.choice,
      choice
    );
    props.deselect({ choice: choice, url: data.c }, "categoryC");
  }
  function AddCategorySTop(e) {
    const choice = Add(e, props.categoryS, 1);
    const data = PrepareData(
      choice,
      props.categoryL.choice,
      props.categoryC.choice
    );
    props.deselect({ choice: choice, url: data.cs }, "categoryS");
  }
  function AddCategoryLTop(e) {
    const choice = Add(e, props.categoryL, 1);
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
    <div style={{ padding: "30px", display: "flex" }}>
      <HitCategory
        category={categoryC}
        hit={categoryC.hit}
        data={{ data: conditions }}
        action={AddConditionsTop}
        tag={{ tag1: "conditions", tag2: "value" }}
        formHeading={"条件"}
      />
      <HitCategory
        category={categoryS}
        hit={categoryS.hit}
        data={{
          data: categorySData,
          err: categorySErr,
          comunication: categorySComunication
        }}
        action={AddCategorySTop}
        tag={{ tag1: "category_s", tag2: "category_s_name" }}
        formHeading={"カテゴリーS"}
      />
      <HitCategory
        category={categoryL}
        hit={categoryL.hit}
        data={{
          data: categoryLData,
          err: categoryLErr,
          comunication: categoryLComunication
        }}
        action={AddCategoryLTop}
        tag={{ tag1: "category_l", tag2: "category_l_name" }}
        formHeading={"カテゴリーL"}
      />
    </div>
  );
}
