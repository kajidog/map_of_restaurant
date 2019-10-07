import React from "react";
import { styles } from "../style/bigCard";

export default function BigCard(props) {
  const ClickCard = e => {
    props.action(e);
  };

  const { j, i, value, display_mode } = props;
  const {
    BigCardFlame,
    DescriptionArea,
    StoreTable,
    AccessButton,
    Img
  } = styles;

  const Access = (data, reserve) =>
    !!Object.keys(data).length && (
      <AccessButton>
        {data}
        {reserve}
      </AccessButton>
    );
  return (
    <BigCardFlame
      key={"bigCard_" + i}
      mode={display_mode}
      id={"store_" + 100 * j + i}
      data-number={100 * j + i}
      onClick={ClickCard}
    >
      <DescriptionArea>
        <StoreTable borderColor="rgba(164, 164, 164, 0.74)">
          <caption>{value.name}</caption>
          <tbody>
            {value.opentime !== "" && (
              <tr>
                <th>Business hours</th>
                <td>
                  <p>{value.opentime}</p>
                </td>
              </tr>
            )}
            {value.budget !== "" && (
              <tr>
                <th>Average budget</th>
                <td>
                  <p>{value.budget}円</p>
                </td>
              </tr>
            )}
            <tr>
              <th>Access</th>
              <td>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <ul style={{ padding: "0", margin: "0" }}>
                    {Access(value.access.line)}
                    {Access(value.access.station)}
                    {Access(value.access.station_exit)}
                    {Access(value.access.walk, "分")}
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <th>Category</th>
              <td>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {value.code.category_name_l.map(
                    (value, i) => value !== "" && <div key={i}>{value}</div>
                  )}
                  {value.code.category_name_s.map(
                    (value, i) => value !== "" && <div key={i}>{value}</div>
                  )}
                </div>
              </td>
            </tr>
          </tbody>
        </StoreTable>
        <Img style={{}}>
          {!!Object.keys(value.image_url.shop_image1).length && (
            <img className="IMG" src={value.image_url.shop_image1} alt="" />
          )}
          {!!Object.keys(value.image_url.shop_image2).length && (
            <img className="IMG" src={value.image_url.shop_image2} alt="" />
          )}
        </Img>
      </DescriptionArea>
    </BigCardFlame>
  );
}
