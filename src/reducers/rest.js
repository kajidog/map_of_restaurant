const initialState = {
  comunication: false,
  response: [null],
  err: false,
  perPge: 10
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "REST_STRT":
      return {
        ...state,
        comunication: true,
        err: false
      };
    case "REST_SET":
      return {
        ...state,
        response: [action.data],
        perPge: action.hit_per_page,
        add: action.add,
        err: false
      };
    case "REST_SET1":
      return {
        ...state,
        response: Response(state.response, action.data),
        perPge: action.hit_per_page,
        add: action.add,
        err: false
      };
    case "REST_ERR":
      return {
        ...state,
        err: true
      };
    case "REST_END":
      return {
        ...state,
        comunication: false
      };
    default:
      return state;
  }
};

const Response = (state, data) => {
  let a = [];
  state.forEach(value => a.push(value));
  a.push(data);
  return a;
};
