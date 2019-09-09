import React from "react";
import {
  styles,
  StoreInformationFlame,
  StoreinTitole,
  StoreInfoCard,
  StoreinBody,
  Descriptionolumn
} from "../style/StoreInformation";
import Map from "../containers/Map";
import StoreReview from "../containers/StoreReview"

export default function StoreInformation(props) {
  const { StoreTable } = styles;
  //店一覧に戻る

  //空かどうかの判定をする
  const EmptyString = (word, Mark, style, lavel = "") => {
    if (word !== "") {
      return (
        <Descriptionolumn>
          <Mark style={{ style }}>
            {lavel} {word}
          </Mark>
        </Descriptionolumn>
      );
    }
    return null;
  };

  //空かどうかの判定をする（テーブル用）
  const EmptyStringTable = (word, style, lavel) => {
    if (word !== "") {
      return (
        <tr>
          <th>{lavel}</th>
          <td style={style}>
            <p>{word}</p>
          </td>
        </tr>
      );
    }
    return null;
  };

  //アクセス情報の表示
  const Access = info => {
    let a = "";
    ["line", "station", "station_exit", "walk"].forEach((value, i) => {
      if (info.value !== "") {
        if (i !== 0) a += " ";
        a += info[value];
      }
    });
    if (a !== "") {
      return (
        <tr>
          <th>アクセス</th>
          <td>
            <p>{a}</p>
          </td>
        </tr>
      );
    } else {
      return null;
    }
  };
  const ClickEvent = () => {
    if (props.state === "hidden") {
      props.chgangeStoreinMode("display");
    } else {
      props.chgangeStoreinMode("hidden");
    }
  };
  const Data = info => (
    <>
    <StoreInfoCard mode={props.display_mode} state={props.state}>
      <StoreinTitole
        onClick={ClickEvent}
        mode={props.display_mode}
        state={props.state}
      >
        <h3>{info.name}</h3>
      </StoreinTitole>
      <StoreinBody mode={props.display_mode} state={props.state}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {info.image_url.shop_image1 !== "" ? (
            <img
              style={{ margin: "10px auto", width: "90%", maxWidth: "300px" }}
              src={info.image_url.shop_image1}
              alt="店舗画像1"
            />
          ) : null}
          {info.image_url.shop_image2 !== "" ? (
            <img
              style={{ margin: "10px auto", width: "90%", maxWidth: "300px" }}
              src={info.image_url.shop_image2}
              alt="店舗画像2"
            />
          ) : null}
        </div>
        {EmptyString(info.pr.pr_long, "p", { color: "red" })}

        <StoreTable>
          <tbody>
            {EmptyStringTable(info.name, { fontSize: "18px" }, "店名")}
            {EmptyStringTable(info.opentime, {}, "営業時間")}
            {EmptyStringTable(info.holiday, {}, "休業日")}
            {EmptyStringTable(info.tel, {}, "電話番号")}
            <tr>
              <th>地図</th>
              <td>
                <Map />
              </td>
            </tr>
            {EmptyStringTable(info.address, {}, "住所")}
            {EmptyStringTable(info.parking_lots, {}, "駐車場台数")}
            {Access(info.access)}
            <tr>
              <th>ぐるなび店舗ページ</th>
              <td>
                <p>
                  {(navigator.userAgent.indexOf("iPhone") > 0 &&
                    navigator.userAgent.indexOf("iPad") === -1) ||
                  navigator.userAgent.indexOf("iPod") > 0 ||
                  navigator.userAgent.indexOf("Android") > 0 ? (
                    <a
                      href={info.url_mobile}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {info.url_mobile}
                    </a>
                  ) : (
                    <a
                      href={info.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {info.url}
                    </a>
                  )}
                </p>
              </td>
            </tr>
          </tbody>
        </StoreTable>
        <StoreReview />
      </StoreinBody>
    </StoreInfoCard>
    </>
  );
  return (
    <StoreInformationFlame mode={props.display_mode}　state={props.state}>
      {props.data !== null && Data(props.data)}
    </StoreInformationFlame>
  );
}
