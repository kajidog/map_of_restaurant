import React from "react";
import { Select } from "../../style/ConditionForm";
export default function RangeForm(props) {
  //範囲指定のドロップダウンメニューの生成
  function RangeSpecificationOption(index, value) {
    if (index === props.range) {
      return null;
    }
    return <option value={index}>{value}</option>;
  }
  function ChangeRange(e) {
    const a = [0, "300m", "500m", "1000m"];
    props.changeRange(e.target.value, a[e.target.value - 0]);
    props.RestGet({ hit_per_page: 100 }, [
      "&range=" + e.target.value,
      "&latitude=" + props.lat,
      "&longitude=" + props.lng,
      props.categoryL.url,
      props.categoryS.url,
      props.categoryC.url
    ]);
  }

  const { rangeValue, range } = props;
  return (
    <li style={{ display: "inline-block" }}>
      <Select value={rangeValue} onChange={ChangeRange}>
        <option value={range} defaultValue>
          検索範囲 : {rangeValue}
        </option>
        {RangeSpecificationOption(1, "300m")}
        {RangeSpecificationOption(2, "500m")}
        {RangeSpecificationOption(3, "1000m")}
      </Select>
    </li>
  );
}
