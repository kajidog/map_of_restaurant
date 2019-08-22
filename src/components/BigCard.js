import React from "react";
import { Button, Img, DetailsButton, StoreName } from "../style/StoreList";

export default function BigCard(props) {
  const ClickCard = e => {
    props.action(e);
  };

  const { j, i, value } = props;

  const Access = (data, reserve) =>
    !!Object.keys(data).length && (
      <Button>
        {data}
        {reserve}
      </Button>
    );

  return (
    <div
      key={"bigCard_" + i}
      style={{
        margin: "25px auto",
        width: "80%",
        boxShadow: "3px 3px 10px 4px rgba(170, 170, 170, 0.2)",
        padding: "10px",
        borderRadius: "0.65rem"
      }}
    >
      <StoreName size="19px">{value.name}</StoreName>
      <div style={{ padding: "5px", display: "flex" }}>
        {!!Object.keys(value.image_url.shop_image1).length && (
          <Img width="300px" url={value.image_url.shop_image1} />
        )}
        {!!Object.keys(value.image_url.shop_image2).length && (
          <Img width="300px" url={value.image_url.shop_image2} />
        )}
      </div>
      <div>
        <p style={{ textAlign: "center" }}>{value.pr.pr_short}</p>
        {value.opentime !== "" && <p style={{}}>営業時間　{value.opentime}</p>}
        {value.budget !== "" && <p style={{}}>平均予算　{value.budget}円</p>}
        <p>アクセス</p>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {Access(value.access.line)}
          {Access(value.access.station)}
          {Access(value.access.station_exit)}
          {Access(value.access.walk, "分")}
        </div>
      </div>
      <div>
        <p>カテゴリー</p>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {value.code.category_name_l.map(
            (value, i) => value !== "" && <Button key={i}>{value}</Button>
          )}
          {value.code.category_name_s.map(
            (value, i) => value !== "" && <Button key={i}>{value}</Button>
          )}
        </div>
      </div>
      <DetailsButton data-number={100 * j + i} onClick={ClickCard}>
        詳しく見る
      </DetailsButton>
    </div>
  );
}
