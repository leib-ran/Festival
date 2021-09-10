export const widthFilterSortModalReducer = (state = 0, action) => {
  switch (action.type) {
    case "SHORTENDWIDTH":
      return 0;
    case "EXTENDWIDTH":
      return 96;
    default:
      return state;
  }
};
