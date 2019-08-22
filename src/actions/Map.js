import qs from "qs";
import axios from "axios";
const API_URL = "https://api.gnavi.co.jp/RestSearchAPI/v3/";
const CategorySmallSearchAPI =
  "https://api.gnavi.co.jp/master/CategorySmallSearchAPI/v3/";
const CategoryLargeSearchAPI =
  "https://api.gnavi.co.jp/master/CategoryLargeSearchAPI/v3/";
//const APP_ID = "363e78b1887b75592b0650a24e1f0f20";
const APP_ID = "1094f71471f7d8e223c87afa7a730e74";
const WAIT = 3000;
const TIMEOUT = 4000;
//カテゴリーの情報取得
export const CategoryS = () => {
  return async dispatch => {
    try {
      dispatch({ type: "CATEGORYS_START" });
      const queryString = await qs.stringify({
        keyid: APP_ID
      });
      await axios
        .get(`${CategorySmallSearchAPI}?${queryString}`)
        .then(res => {
          const items = res.data;
          dispatch(Judgment("CATEGORYS", items, "category_s"));
        })
        .catch(error => {
          dispatch({ type: "CATEGORYS_ERR" });
        });
    } catch (e) {
      dispatch({ type: "CATEGORYS_ERR" });
    }
    dispatch({ type: "CATEGORYS_END" });
  };
};
export const CategoryL = () => {
  return async dispatch => {
    try {
      dispatch({ type: "CATEGORYL_START" });
      const queryString = await qs.stringify({
        keyid: APP_ID
      });
      await axios
        .get(`${CategoryLargeSearchAPI}?${queryString}`)
        .then(res => {
          const items = res.data;
          dispatch(Judgment("CATEGORYL", items, "category_l"));
        })
        .catch(error => {
          dispatch({ type: "CATEGORLS_ERR" });
        });
    } catch (e) {
      dispatch({ type: "CATEGORYL_ERR" });
    }
    dispatch({ type: "CATEGORYL_END" });
  };
};
//カテゴリーのレスポンスのerror判定
const Judgment = (type, data, key) => {
  if (key in data) {
    return { type: type + "_SET", data: data };
  }
  return { type: type + "_ERR" };
};

//現在地の取得
const getPresentLocation = () => {
  let watchID;
  let lat;
  let lng;
  let geoOptions = {
    maximumAge: 0,
    timeout: TIMEOUT,
    enableHighAccuracy: true
  };
  return new Promise(function(resolve) {
    watchID = navigator.geolocation.watchPosition(onSuccess, onErr, geoOptions);
    setTimeout(() => {
      resolve(fn());
    }, WAIT);
  });
  function fn() {
    navigator.geolocation.clearWatch(watchID);
    return {
      type: "SET_CURRNT_LOCATION",
      payload: {
        lat: lat,
        lng: lng
      }
    };
  }
  function onSuccess(pos) {
    lat = pos.coords.latitude;
    lng = pos.coords.longitude;
  }
  function onErr(err) {}
};

const receiveData = response => ({
  type: "RECEIVE_DATA",
  response: response
});

// レストランの情報取得
export function RestGet(send, add, mode = 1) {
  return async dispatch => {
    try {
      dispatch({ type: "REST_STRT" });
      let json = Object.assign(send, { keyid: APP_ID });
      let queryString = await qs.stringify(json);
      add.forEach(value => (queryString += value));
      console.log(JSON.stringify(queryString));
      await axios
        .get(`${API_URL}?${queryString}`)
        .then(res => {
          const items = res.data;
          let a = Judgment("REST", items, "rest");
          a["send"] = send;
          a["add"] = add;
          if (mode !== 1) a.type = "REST_SET1";
          dispatch(a);
        })
        .catch(error => {
          dispatch({ type: "REST_ERR" });
        });
    } catch (e) {
      dispatch({ type: "REST_ERR" });
    }
    dispatch({ type: "REST_END" });
  };
}

//現在地の取得
export function getCurrentLocation() {
  return async dispatch => {
    try {
      const d = await CategoryS();
      dispatch(d);
      const e = await CategoryL();
      dispatch(e);
      let a = await getPresentLocation();
      dispatch({ type: a.type, payload: a.payload });
      const queryString = await qs.stringify({
        latitude: a.payload.lat, //-0.003225,
        longitude: a.payload.lng, //+0.002801,
        range: 1
      });
      const f = RestGet({ hit_per_page: 100 }, ["&" + queryString]);
      dispatch(f);
    } catch (e) {
      dispatch(receiveData(e));
    }
  };
}
export const ClickShop = (name, lat, lng) => {
  return {
    type: "CLICK_SHOP",
    payload: {
      info: {
        name: name,
        lat: lat,
        lng: lng
      }
    }
  };
};

export const GetToRestID = id => {
  return async dispatch => {
    try {
      dispatch({ type: "STORE_INFORMATION_STRT" });
      let queryString = await qs.stringify({
        keyid: APP_ID,
        id: id
      });
      console.log(JSON.stringify(queryString));
      await axios
        .get(`${API_URL}?${queryString}`)
        .then(res => {
          const items = res.data;
          dispatch(Judgment("STORE_INFORMATION", items, "rest"));
        })
        .catch(error => {
          dispatch({ type: "STORE_INFORMATION_ERR" });
        });
    } catch (e) {
      dispatch({ type: "STORE_INFORMATION_ERR" });
    }
    dispatch({ type: "STORE_INFORMATION_END" });
  };
};
