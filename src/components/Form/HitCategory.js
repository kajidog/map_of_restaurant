import React from "react";
import { ConditionList, Heading } from "../../style/ConditionForm";
export default function HitCategory(props) {
  const { category, hit, data, action, tag, formHeading } = props;
  //ヒットの一覧の表示
  return (
    <div>
      <Heading>{formHeading}</Heading>
      {data.err ? (
        <p>データを取得できませんでした</p>
      ) : data.comunication ? (
        <p>通信中</p>
      ) : data.data !== null ? (
        <div>
          {hit.length > 0 ? (
            <div>
              {hit.map((
                value,
                i //ヒットした一覧の表示
              ) => (
                <div key={i}>
                  {category.choice.indexOf(value) !== -1 ? ( //選択しているかの判定
                    <ConditionList
                      padding="10px 30px"
                      onClick={action}
                      data-number={i}
                    >
                      ✔{data.data[tag.tag1][value][tag.tag2]}
                    </ConditionList>
                  ) : (
                    <ConditionList onClick={action} data-number={i}>
                      {" "}
                      {data.data[tag.tag1][value][tag.tag2]}
                    </ConditionList>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p>見つかりませんでした</p>
          )}
        </div>
      ) : (
        <p>準備中</p>
      )}
    </div>
  );
}
