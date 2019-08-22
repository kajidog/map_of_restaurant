const initialState = {
  hasLocation: false,
  latlng: {
    lat: 51.505,
    lng: -0.09
  },
  value: 1,
  range: 1,
  response: {},
  clickShop: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRNT_LOCATION":
      return {
        ...state,
        latlng: {
          lat: action.payload.lat,
          lng: action.payload.lng
        }
      };
    case "CLICK_SHOP":
      return {
        ...state,
        clickShop: action.payload.info
      };
    default:
      return state;
  }
};
