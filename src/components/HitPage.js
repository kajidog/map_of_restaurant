import React, { useState } from "react";
import SmallCard from "./SmallCard";
import BigCard from "./BigCard";

export default function HitPage(props) {
  const [cerect, setCerect] = useState(-1);
  // クリックされて店の情報を表示
  function ClickShop(e) {
    const getAttribute = e.currentTarget.getAttribute("data-number") - 0;

    const b =
      props.response[Math.floor(getAttribute / 100)].rest[getAttribute % 100];
    props.ClickShop(b.name, b.latitude - 0, b.longitude - 0);
    props.Map();
    setCerect(getAttribute);
  }
  //店の詳細画面に
  function ToStoreInformation(e) {
    const getAttribute = e.currentTarget.getAttribute("data-number") - 0;
    props.Information(
      props.response[Math.floor(getAttribute / 100)].rest[getAttribute % 100]
    );
  }

  const { response, comunication } = props;

  return (
    <div style={{ margin: "10px", padding: "30px 0" }}>
      <p>{response[0].total_hit_count}件ヒット</p>
      {response.map((value, j) =>
        value.rest.map((value, i) =>
          cerect !== 100 * j + i ? (
            <SmallCard j={j} i={i} value={value} action={ClickShop} />
          ) : (
            <BigCard j={j} i={i} value={value} action={ToStoreInformation} />
          )
        )
      )}
      {comunication && <p style={{ textAlign: "center" }}>通信中...</p>}
    </div>
  );
}
