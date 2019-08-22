import React from "react";
import { Button, Img, List, StoreName } from "../style/StoreList";

export default function SmallCard(props) {
  const ClickCard = e => {
    props.action(e);
  };
  const { j, i, value } = props;
  return (
    <List data-number={100 * j + i} onClick={ClickCard} key={"smallCard_" + i}>
      {Object.keys(value.image_url.shop_image1).length ? (
        <Img width="300px" url={value.image_url.shop_image1} />
      ) : Object.keys(value.image_url.shop_image2).length ? (
        <Img width="auto" url={value.image_url.shop_image2} />
      ) : null}
      <div style={{ margin: "0 auto 0 0" }}>
        <StoreName size="15px">{value.name}</StoreName>
        {value.code.category_name_l.map(
          (value, i) =>
            value !== "" && <Button key={"categoryL_name_" + i}>{value}</Button>
        )}
        {value.code.category_name_s.map(
          (value, i) =>
            value !== "" && <Button key={"categoryS_name_" + i}>{value}</Button>
        )}
      </div>
    </List>
  );
}
