import { ITEMCHECKOUT } from "../actions/types";

const intialState = null;
export function ItemReducer(state = intialState, action) {
  switch (action.type) {
    case ITEMCHECKOUT:
      return action.payload;
  }
  return state;
}
