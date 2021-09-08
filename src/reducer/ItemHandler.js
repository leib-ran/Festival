const initialState = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : {};

export const itemHandlerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDITEM":
      return state.concat(action.payload);

    case "REMOVEITEM":
      break;
  }
  return state;
};
