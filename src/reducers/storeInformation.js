const initialState = {
  comunication: false,
  info: null,
  err: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "INFORMATION":
      return {
        ...state,
        info: action.data
      };
    case "STORE_INFORMATION_START":
      return {
        ...state,
        comunication: true,
        err: false
      };
    case "STORE_INFORMATION_SET":
      return {
        ...state,
        info: action.data,
        err: false
      };
    case "STORE_INFORMATION_ERR":
      return {
        ...state,
        err: true
      };
    case "STORE_INFIRMATION_END":
      return {
        ...state,
        comunication: false
      };
    default:
      return state;
  }
};
