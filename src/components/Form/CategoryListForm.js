import React from "react";
import HitCategory from "./HitCategory";
import { ShowandHide } from "../../style/ConditionForm";

export default function CategoryListForm (props) {
    const { category, hit, data, action, tag, hide } = props;
    return (
      <div
        style={{
          padding: "30px",
          borderBottom: "1px solid rgba(246, 95, 117, 0.7)"
        }}
      >
        <HitCategory
          category={category}
          hit={hit}
          data={data}
          action={action}
          tag={tag}
        />
        {category.hide ? (
          <ShowandHide type="button" value="隠す" onClick={hide} />
        ) : (
          <ShowandHide type="button" value="すべて表示" onClick={hide} />
        )}
      </div>
    );
  }
