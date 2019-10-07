import React from "react";
import { styles } from "../../style/storeReview";
import ComentItem from "./ComentItem";
import ComentForm from "../../containers/ComentForm";
export default function StoreReview(props) {
  const { ReviewFlame } = styles;
  const { coments } = props;
  const getIndex = object => {
    return Object.keys(object);
  };
  return (
    <ReviewFlame>
      <h3>コメント : {getIndex(coments).length}件</h3>
      <div className="coments">
        {getIndex(coments).map((tate, i) => (
          <ComentItem
            key={"comments_" + i}
            coment={coments[tate].coment}
            evaluation={coments[tate].evaluation}
            created={coments[tate].created}
          />
        ))}
      </div>
      <h3>レビューする</h3>
      <ComentForm />
    </ReviewFlame>
  );
}
