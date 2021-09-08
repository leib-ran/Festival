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

export const removeItem = (item) => {
  return {
    type: "REMOVEITEM",
    payload: item,
  };
};
