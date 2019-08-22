import React, { createRef } from "react";
import { Map as Atlas, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

export default function Map(props) {
  const mapRef = createRef();
  //現在地に使うマーカー
  const myIcon = L.icon({
    iconUrl: require("../images/マップピンのアイコン素材 3.png"),
    iconSize: [32, 32],
    iconAnchor: [20, 42],
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null
  });

  const { display, hasLocation, clickShop, latlng } = props;
  return (
    <div>
      {display ? (
        <div style={{ height: "30vh" }}>
          {hasLocation ? <p>通信中</p> : <p> </p>}
          {clickShop !== null ? (
            clickShop.lat === 0 ? (
              <h4
                style={{
                  textAlign: "center",
                  color: "red",
                  fontSize: "16px"
                }}
              >
                店の位置情報は登録されていません
              </h4>
            ) : null
          ) : null}
          <Atlas
            center={{
              lat: clickShop.lat,
              lng: clickShop.lng
            }}
            length={5}
            ref={mapRef}
            zoom={17}
          >
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {clickShop !== null ? (
              clickShop.lat !== 0 ? (
                <Marker
                  position={{
                    lat: clickShop.lat,
                    lng: clickShop.lng
                  }}
                >
                  <Popup>
                    <span>{clickShop.name}</span>
                  </Popup>
                </Marker>
              ) : null
            ) : null}
            <Marker
              position={{
                lat: latlng.lat,
                lng: latlng.lng
              }}
              icon={myIcon}
            />
          </Atlas>
        </div>
      ) : null}
    </div>
  );
}
