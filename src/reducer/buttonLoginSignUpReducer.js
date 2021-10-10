import { ISSIGNIN } from "../actions/types";

const initialstate = true;

export function buttonLoginSignUpReducer(state = initialstate, action) {
  switch (action.type) {
    case ISSIGNIN:
      return action.payload;
  }
  return state;
}
