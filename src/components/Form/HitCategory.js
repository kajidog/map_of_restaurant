import React from "react";
import { styles } from "../../style/formList";
export default function HitCategory(props) {
  const { category, hit, data, action, tag, formHeading } = props;
  const { StoreTable } = styles;
  //ヒットの一覧の表示
  return (
    <div>
      {data.err ? (
        <p>データを取得できませんでした</p>
      ) : data.comunication ? (
        <p>通信中</p>
      ) : data.data !== null ? (
        <div>
          {hit.length > 0 ? (
            <div>
              <StoreTable borderColor="rgba(164, 164, 164, 0.74)">
                <caption>{formHeading}</caption>
                <tbody>
                  {hit.map((
                    value,
                    i //ヒットした一覧の表示
                  ) => (
                    <tr
                      key={i}
                      style={{
                        transition: "all 0.2s"
                      }}
                    >
                      {category.choice.indexOf(value) !== -1 ? ( //選択しているかの判定
                        <th>
                          <p
                            padding="10px 30px"
                            style={{ position: "relative" }}
                            onClick={action}
                            data-number={i}
                          >
                            ✔{data.data[tag.tag1][value][tag.tag2]}
                          </p>
                        </th>
                      ) : (
                        <th>
                          <p onClick={action} data-number={i}>
                            {" "}
                            {data.data[tag.tag1][value][tag.tag2]}
                          </p>
                        </th>
                      )}
                    </tr>
                  ))}
                </tbody>
              </StoreTable>
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
