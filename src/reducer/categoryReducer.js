import { CATEGORYTYPE } from "../actions/types";

const intialState = "";

export function categoryReducer(state = intialState, action) {
  switch (action.type) {
    case CATEGORYTYPE:
      return action.payload;
  }
  return state;
}
