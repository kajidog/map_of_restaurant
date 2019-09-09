const initialState = {
  comunication: false,
  info: null,
  err: false,
  coments: {
    "1234":{
      coment:
        "ey ID（アクセスキー）の値は、デイリー更新される仮のものです。ご自身で作成されるアプリケーションでは、新規アカウント登録時に発行されるアクセスキ",
      evaluation: 3

    },
    "432":{
      coment:
        "ey ID（アクセスキー）の値は、デイリー更新される仮のものです。ご自身で作成されるアプリケーションでは、新規アカウント登録時に発行されるアクセスキ",
      evaluation: 5

    }
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "COMMENTS_RECEIVE_DATA":
      return {
        ...state,
      coments:action.comments
      }
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
