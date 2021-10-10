export const heightReducer = (state = 16, action) => {
  switch (action.type) {
    case "SHORTENDHEIGHt":
      return 0;

    case "EXTENDHEIGHT":
      return 16;
  }
  return state;
};
