import { GLOBALCENTER } from "../actions/types";

const intialState = [2.68, 23.2];

export const globalCenterReducer = (state = intialState, action) => {
  switch (action.type) {
    case GLOBALCENTER:
      return action.payload;
  }
  return state;
};
