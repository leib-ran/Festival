import { SORTTYPE } from "../actions/types";

const initialState = "";

export const sorttypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORTTYPE:
      console.log("shuhsu");
      return action.payload;
  }
  return state;
};
