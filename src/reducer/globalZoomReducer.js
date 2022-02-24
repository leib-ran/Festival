import { GLOBALZOOM } from "../actions/types";

const initalState = 3;

export const globalZoomReducer = (state = initalState, action) => {
  switch (action.type) {
    case GLOBALZOOM:
      return action.payload;
  }
  return state;
};
