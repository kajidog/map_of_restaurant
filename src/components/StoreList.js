import React, { useState } from "react";
import { Lists, StoreListFlame } from "../style/StoreList";
import HitPage from "../containers/HitPage";
export default function StoreList(props) {
  const [node, setNode] = useState(null);

  //スクロールの監視
  const scrollEvent = e => {
    const currentPosition =
      node.scrollHeight - node.clientHeight - node.scrollTop;
    if (currentPosition < 100) {
      //高さが100以下で次のデータを持ってくる
      if (!props.comunication) {
        const a = props.response.length - 1;
        if (
          props.response[a].hit_per_page * props.response[a].page_offset <
          props.response[a].total_hit_count
        ) {
          ChangePage(
            {
              offset_page: props.response[a].page_offset + 1,
              hit_per_page: 100
            },
            props.url,
            2
          );
        }
      }
    }
  };
  function ChangePage(e) {
    const length = props.response.length - 1;
    if (
      props.response[length].hit_per_page * props.response[length].page_offset <
      props.response[length].total_hit_count
    ) {
      props.ChangePage(
        {
          offset_page: props.response[length].page_offset + 1,
          hit_per_page: 100
        },
        props.url,
        2
      );
    }
  }

  const { response, err, comunication, display_mode } = props;

  return (
    <StoreListFlame mode={display_mode}>
      {
        <div
          style={{
            height: "calc(100vh - 65px)"
          }}
        >
          <Lists onScroll={scrollEvent} ref={node => setNode(node)}>
            <h2>周辺の飲食店一覧</h2>
            <a
              style={{ float: "right" }}
              href="https://api.gnavi.co.jp/api/scope/"
              rel="noopener noreferrer"
            >
              <img
                src="https://api.gnavi.co.jp/api/img/credit/api_90_35.gif"
                style={{ width: "90", height: "35", border: "0" }}
                alt="グルメ情報検索サイト　ぐるなび"
              />
            </a>
            {err ? (
              <p>データを取得できませんでした</p>
            ) : response[0] !== null ? (
              <HitPage response={response} comunication={comunication} />
            ) : comunication ? (
              <p
                style={{
                  color: "rgb(145, 145, 145)",
                  paddingLeft: "1rem",
                  margin: "0"
                }}
              >
                通信中
              </p>
            ) : (
              <p
                style={{
                  color: "rgb(145, 145, 145)",
                  paddingLeft: "1rem",
                  margin: "0"
                }}
              >
                現在地取得中...
              </p>
            )}
          </Lists>
        </div>
      }
    </StoreListFlame>
  );
}
