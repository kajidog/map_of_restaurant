export const FormExpansion = () => {
  return {
    type: "FORMEXPANSION"
  };
};
export const Default = () => {
  return {
    type: "DEFAULT"
  };
};
export const Map = () => {
  return {
    type: "MAP"
  };
};

export const Back = () => {
  return {
    type: "BACK"
  };
};
export const Actions = {
  change_display_mode: mode => {
    return {
      type: "NEXT_DISPLAY_MODE",
      mode: mode
    };
  }
};
export const Information = data => {
  return {
    type: "INFORMATION",
    data: data
  };
};

export const chgangeStoreinMode = nextMode => {
  return {
    type: "CHANGE_STOREIN_MODE",
    mode: nextMode
  };
};
