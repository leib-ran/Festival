import { SORTTYPE } from "../actions/types";

const initialState = "";

export const sorttypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORTTYPE:
      return action.payload;
  }
  return state;
};
