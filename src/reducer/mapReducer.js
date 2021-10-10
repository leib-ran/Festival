import { MAPSTATE } from "../actions/types";

const intialState = {};
export function mapReducer(state = intialState, action) {
  switch (action.type) {
    case MAPSTATE:
      return action.payload;
  }
  return state;
}
