const initialState = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

export const itemHandlerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDITEM":
      return state.concat(action.payload);

    case "REMOVEITEM":
      return state
        .slice(0, action.payload)
        .concat(state.slice(action.payload + 1));
  }
  return state;
};
