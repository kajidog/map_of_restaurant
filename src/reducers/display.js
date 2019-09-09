const initialState = {
  map: false,
  form: true,
  list: true,
  info: false,
  display_mode: "mini",
  state: "hidden",
  expansion: false,
  storeListHeight: "calc(100vh - 65px)"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "NEXT_DISPLAY_MODE":
      return {
        ...state,
        display_mode: action.mode
      };
    case "CHANGE_STOREIN_MODE":
      return {
        ...state,
        state: action.mode
      };
    case "FORMEXPANSION":
      return {
        ...state,
        list: false,
        map: false,
        expansion: true,
        storeListHeight: "calc(100vh - 65px)"
      };
    case "DEFAULT":
      return {
        ...state,
        form: true,
        map: false,
        list: true,
        info: false,
        expansion: false,
        storeListHeight: "calc(100vh - 65px)"
      };
    default:
      return state;
  }
};
