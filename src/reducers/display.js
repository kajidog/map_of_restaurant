const initialState = {
  map: false,
  form: true,
  list: true,
  info: false,
  expansion: false,
  storeListHeight: "calc(100vh - 65px)"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FORMEXPANSION":
      return {
        ...state,
        list: false,
        map: false,
        expansion: true,
        storeListHeight: "calc(100vh - 65px)"
      };
    case "MAP":
      return {
        ...state,
        map: true,
        storeListHeight: "calc(100vh - ( 65px + 32vh ))"
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
    case "BACK":
      return {
        ...state,
        form: true,
        map: true,
        list: true,
        info: false,
        storeListHeight: "calc(100vh - ( 65px + 32vh ))"
      };
    case "INFORMATION":
      return {
        form: false,
        map: false,
        list: false,
        info: true,
        storeListHeight: "calc(100vh - 65px)"
      };
    default:
      return state;
  }
};
