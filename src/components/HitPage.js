import React, { useState } from "react";
import SmallCard from "./BigCard";

export default function HitPage(props) {
  const [cerect, setCerect] = useState(-1);
  // クリックされて店の情報を表示
  function ClickShop(e) {
    const getAttribute = e.currentTarget.getAttribute("data-number") - 0;
    getScrollLocations(getAttribute);
    const b =
      props.response[Math.floor(getAttribute / 100)].rest[getAttribute % 100];
    props.ClickShop(b.name, b.latitude - 0, b.longitude - 0);
    props.Map();
    setCerect(getAttribute);
    props.getCommemts(b.id);
    props.chgangeStoreinMode("display");
  }
  //店の詳細画面に
  function ToStoreInformation(e) {
    ClickShop(e);
    const getAttribute = e.currentTarget.getAttribute("data-number") - 0;
    props.Information(
      props.response[Math.floor(getAttribute / 100)].rest[getAttribute % 100]
    );
  }
  function getScrollLocations(getAttribute) {
    //const whatIDo = document.getElementById("store_"+ getAttribute-0);
    //whatIDo.scrollIntoView({block: 'end', behavior: 'smooth', inline:"start"});
  }

  const { response, comunication, display_mode } = props;

  return (
    <div style={{ margin: "10px 3%", padding: "10px 3%" }}>
      <p id={""}>{response[0].total_hit_count}件ヒット</p>
      {response.map((value, j) =>
        value.rest.map((value, i) =>
          cerect !== 100 * j + i ? (
            <SmallCard
              key={"smal_card_" + (100 * j + i)}
              j={j}
              i={i}
              value={value}
              action={ToStoreInformation}
              display_mode={display_mode}
            />
          ) : (
            <SmallCard
              key={"smal_card_" + (100 * j + i)}
              j={j}
              i={i}
              value={value}
              action={ToStoreInformation}
              display_mode={display_mode}
            />
          )
        )
      )}
      {comunication && <p style={{ textAlign: "center" }}>通信中...</p>}
    </div>
  );
}
