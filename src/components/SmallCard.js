import React from "react";
import { Button, List, StoreName } from "../style/StoreList";

export default function SmallCard(props) {
  const ClickCard = e => {
    props.action(e);
  };
  const { j, i, value } = props;
  return (
    <div key={"smallCard_" + i} id={`store_${100 * j + i}`}>
      <List onClick={ClickCard} data-number={100 * j + i}>
        <div style={{ margin: "0 auto 0 0" }}>
          <StoreName size="15px">{value.name}</StoreName>
          {value.code.category_name_l.map(
            (value, i) =>
              value !== "" && (
                <Button key={"categoryL_name_" + i}>{value}</Button>
              )
          )}
          {value.code.category_name_s.map(
            (value, i) =>
              value !== "" && (
                <Button key={"categoryS_name_" + i}>{value}</Button>
              )
          )}
        </div>
      </List>
    </div>
  );
}
