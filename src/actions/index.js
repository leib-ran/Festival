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
