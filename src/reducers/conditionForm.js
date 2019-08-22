const initialState = {
  mode: false,
  keyword: "",
  range: 1,
  rangeValue: "300m",
  conditions: {
    conditions: [
      { value: "ランチ営業あり", para: "lunch" },
      { value: "禁煙席あり", para: "no_smoking" },
      { value: "カード利用可", para: "card" },
      { value: "携帯の電波が入る", para: "mobilephone" },
      { value: "飲み放題あり", para: "bottomless_cup" },
      { value: "日曜営業あり", para: "sunday_open" },
      { value: "テイクアウトあり", para: "takeout" },
      { value: "個室あり", para: "private_room" },
      { value: "深夜営業あり", para: "midnight" },
      { value: "駐車場あり", para: "parking" },
      { value: "法事利用可", para: "memorial_service" },
      { value: "誕生日特典あり", para: "birthday_privilege" },
      { value: "結納利用可", para: "betrothal_present" },
      { value: "キッズメニューあり", para: "kids_menu" },
      { value: "電源あり", para: "outret" },
      { value: "wifeあり", para: "wifi" },
      { value: "マイクあり", para: "microphone" },
      { value: "食べ放題あり", para: "buffet" },
      { value: "14時以降のランチあり", para: "late_lunch" },
      { value: "スポーツ観戦可", para: "sports" },
      { value: "朝まで営業あり", para: "until_morning" },
      { value: "ランチデザートあり", para: "lunch_desert" },
      { value: "プロジェクター・スクリーンあり", para: "projecter_screen" },
      { value: "ペット同伴可", para: "with_pet" },
      { value: "デリバリーあり", para: "deliverly" },
      { value: "土曜日特別ランチあり", para: "special_holiday_lunch" },
      { value: "電子マネー利用可", para: "e_money" },
      { value: "ケータリングあり", para: "caterling" },
      { value: "モーニング・朝ごはんあり", para: "breakfast" },
      { value: "デザートビュッフェあり", para: "desert_buffet" },
      { value: "ランチビュッフェあり", para: "lunch_buffet" },
      { value: "お弁当あり", para: "bento" },
      { value: "ランチサラダバーあり", para: "lunch_salad_buffet" },
      { value: "ダーツあり", para: "darts" },
      { value: "Web予約可", para: "web_reserve" }
    ]
  },
  categoryC: {
    title: "条件",
    url: "",
    hit: [],
    hitTop: [0, 1, 2, 3, 4],
    choice: [],
    hide: false
  },
  categoryS: {
    title: "カテゴリーS",
    url: "",
    hit: [],
    hitTop: [0, 1, 2, 3, 4],
    choice: [],
    hide: false
  },
  categoryL: {
    title: "カテゴリーL",
    url: "",
    hit: [],
    hitTop: [0, 1, 2, 3, 4],
    choice: [],
    hide: false
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "DESELECT":
      switch (action.category) {
        case "categoryC":
          return {
            ...state,
            categoryC: {
              ...state.categoryC,
              choice: action.data.choice,
              url: action.data.url
            }
          };
        case "categoryS":
          return {
            ...state,
            categoryS: {
              ...state.categoryS,
              choice: action.data.choice,
              url: action.data.url
            }
          };
        case "categoryL":
          return {
            ...state,
            categoryL: {
              ...state.categoryL,
              choice: action.data.choice,
              url: action.data.url
            }
          };
        default:
          return {
            ...state
          };
      }
    case "CHANGE_FORM_MODE":
      return {
        ...state,
        mode: !state.mode
      };
    case "SET_KEYWORD":
      return {
        ...state,
        keyword: action.keyword
      };
    case "SET_FORM_HIT":
      return {
        ...state,
        categoryC: {
          ...state.categoryC,
          hit: action.hit.categoryC
        },
        categoryS: {
          ...state.categoryS,
          hit: action.hit.categoryS
        },
        categoryL: {
          ...state.categoryL,
          hit: action.hit.categoryL
        }
      };
    case "CHANGE_RANGE":
      return {
        ...state,
        range: action.range,
        rangeValue: action.rangeValue
      };
    case "CHANGEFORMHIDE":
      switch (action.mode) {
        case "categoryC":
          return {
            ...state,
            categoryC: {
              ...state.categoryC,
              hide: action.display.hide,
              hitTop: action.display.hitTop
            }
          };
        case "categoryS":
          return {
            ...state,
            categoryS: {
              ...state.categoryS,
              hide: action.display.hide,
              hitTop: action.display.hitTop
            }
          };
        case "categoryL":
          return {
            ...state,
            categoryL: {
              ...state.categoryL,
              hide: action.display.hide,
              hitTop: action.display.hitTop
            }
          };

        default:
          return {
            ...state
          };
      }
    default:
      return state;
  }
};
