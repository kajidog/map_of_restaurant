export const Actions = {
  deselect(data, category) {
    return {
      type: "DESELECT",
      data: data,
      category: category
    };
  },
  changeFormMode() {
    return {
      type: "CHANGE_FORM_MODE"
    };
  },
  changeFormKeyword(keyword) {
    return async (dispatch, getState) => {
      let a = [];
      let b = [];
      let c = [];
      if (keyword !== "") {
        getState().conditionForm.conditions.conditions.forEach((value, i) => {
          if (value.value.indexOf(keyword) !== -1) a.push(i);
        });
        if (getState().categoryS.data !== null) {
          getState().categoryS.data.category_s.forEach((value, i) => {
            if (value.category_s_name.indexOf(keyword) !== -1) b.push(i);
          });
        }
        if (getState().categoryL.data !== null) {
          getState().categoryL.data.category_l.forEach((value, i) => {
            if (value.category_l_name.indexOf(keyword) !== -1) c.push(i);
          });
        }
      }
      dispatch({ type: "SET_KEYWORD", keyword: keyword });
      dispatch({
        type: "SET_FORM_HIT",
        hit: { categoryC: a, categoryS: b, categoryL: c }
      });
    };
  },
  changeRange(range, rangeValue) {
    return {
      type: "CHANGE_RANGE",
      range: range,
      rangeValue: rangeValue
    };
  },
  changeFormHide(display, type) {
    return {
      type: "CHANGEFORMHIDE",
      display: display,
      mode: type
    };
  }
};
