import React from "react";
import { styles } from "../../style/storeReview";
export default function StoreReview(props) {
  const { ComentFlame } = styles;

  const { coment, evaluation, created } = props;
  return (
    <ComentFlame>
      <div>
        <span>
          {[0, 1, 2, 3, 4].map(i => {
            if (i < evaluation) {
              return (
                <span key={"evaluation_star_" + i} className="yellow">
                  ★
                </span>
              );
            }
            return (
              <span key={"evaluation_star_" + i} className="gray">
                ☆
              </span>
            );
          })}
        </span>
        <span className="date">{created}</span>
      </div>
      <div>
        <span>{coment}</span>
      </div>
    </ComentFlame>
  );
}
