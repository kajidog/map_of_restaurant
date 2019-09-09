import React, { useState } from "react";
import { styles, Ster } from "../../style/storeReview";
export default function ComentForm(props) {
  const [starCount, setStarcount] = useState(3);
  const [comment, setComment] = useState("")
  const [starCount1, setStarcount1] = useState(3);
  const { ComentFormFlame, SendButton } = styles;
  const addComment = () =>{
    setStarcount(3);
    setStarcount1(3);
    setComment("");
    props.addComments({
      storeId:props.storeId,
      evaluation: starCount,
      coment: comment,
    })
  }
  return (
    <ComentFormFlame>
      <table>
        <tbody>
          <tr>
            <th>評価 : {starCount}</th>
            <td>
              <Ster
                i="1"
                sum={starCount1}
                onClick={() => setStarcount(1)}
                onMouseLeave={() => setStarcount1(starCount)}
                onMouseEnter={() => setStarcount1(1)}
              >
                ★
              </Ster>
              <Ster
                i="2"
                sum={starCount1}
                onClick={() => setStarcount(2)}
                onMouseLeave={() => setStarcount1(starCount)}
                onMouseEnter={() => setStarcount1(2)}
              >
                ★
              </Ster>
              <Ster
                i="3"
                sum={starCount1}
                onClick={() => setStarcount(3)}
                onMouseLeave={() => setStarcount1(starCount)}
                onMouseEnter={() => setStarcount1(3)}
              >
                ★
              </Ster>
              <Ster
                i="4"
                sum={starCount1}
                onClick={() => setStarcount(4)}
                onMouseLeave={() => setStarcount1(starCount)}
                onMouseEnter={() => setStarcount1(4)}
              >
                ★
              </Ster>
              <Ster
                i="5"
                sum={starCount1}
                onClick={() => setStarcount(5)}
                onMouseLeave={() => setStarcount1(starCount)}
                onMouseEnter={() => setStarcount1(5)}
              >
                ★
              </Ster>
            </td>
          </tr>
          <tr>
            <th>コメント</th>
            <td>
              <div>
              <textarea onChange={(e)=>setComment(e.target.value)} value={comment}></textarea>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <SendButton onClick={addComment}><span>Send</span></SendButton>
    </ComentFormFlame>
  );
}
