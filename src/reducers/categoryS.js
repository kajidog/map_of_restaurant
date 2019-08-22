const initialState = {
  comunication: false,
  err: false,
  data: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "CATEGORYS_START":
      return {
        ...state,
        comunication: true,
        err: false
      };
    case "CATEGORYS_SET":
      return {
        ...state,
        data: action.data
      };
    case "CATEGORYS_ERR":
      return {
        ...state,
        err: true
      };
    case "CATEGORYS_END":
      return {
        ...state,
        comunication: false
      };
    default:
      return state;
  }
};
