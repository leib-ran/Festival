export const increament = (quan) => {
  return {
    type: "INCREAMENT",
    payload: quan,
  };
};

export const decreament = (quan) => {
  return {
    type: "DECREAMENT",
    payload: quan,
  };
};

export const addItem = (item) => {
  return {
    type: "ADDITEM",
    payload: item,
  };
};

export const removeItem = (index) => {
  return {
    type: "REMOVEITEM",
    payload: index,
  };
};

export const shortendHide = () => {
  return {
    type: "SHORTENDHEIGHt",
  };
};

export const extendHeight = () => {
  return {
    type: "EXTENDHEIGHT",
  };
};

export const shortendHideWidth = () => {
  return {
    type: "SHORTENDWIDTH",
  };
};

export const extendWidth = () => {
  return {
    type: "EXTENDWIDTH",
  };
};
