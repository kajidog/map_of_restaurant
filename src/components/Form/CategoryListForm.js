import React from "react";
import HitCategory from "./HitCategory";
import { ShowandHide } from "../../style/ConditionForm";

export default function CategoryListForm(props) {
  const { category, hit, data, action, tag, hide, formHeading } = props;
  return (
    <div
      style={{
        padding: "30px",
        borderBottom: "6px #a5a5a5 dotted"
      }}
    >
      <HitCategory
        category={category}
        hit={hit}
        data={data}
        action={action}
        tag={tag}
        formHeading={formHeading}
      />
      <div>
        {category.hide ? (
          <ShowandHide onClick={hide}>Hide</ShowandHide>
        ) : (
          <ShowandHide onClick={hide}>Show all</ShowandHide>
        )}
      </div>
    </div>
  );
}
