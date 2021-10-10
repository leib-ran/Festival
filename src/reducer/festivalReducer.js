import { UPDATEFESTIVAL } from "../actions/types";

const intialState = null;
export const festivalReducer = (state = intialState, action) => {
  switch (action.type) {
    case UPDATEFESTIVAL:
      return action.payload;
  }
  return state;
};
