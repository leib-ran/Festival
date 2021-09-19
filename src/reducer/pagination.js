import { PAGENUMBER } from "../actions/types";

const InitialState = 1;
export const paginationReducer = (state = InitialState, action) => {
  switch (action.type) {
    case PAGENUMBER:
      return action.payload;
    default:
      return state;
  }
};
