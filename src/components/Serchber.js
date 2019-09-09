import React from "react";
import { LoadingFlame, Bear1, Ber2 } from "../style/StoreList";

export default function Serachber(props) {
  const { comunication } = props;
  return (
    <>
      {comunication && (
        <LoadingFlame>
          <Bear1 />
          <Ber2 />
        </LoadingFlame>
      )}
    </>
  );
}
