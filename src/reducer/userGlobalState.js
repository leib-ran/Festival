import { USER } from "../actions/types";

const initialState = {};
export function userGlobalState(state = initialState, action) {
  switch (action.type) {
    case USER:
      return action.payload;
  }
  return state;
}
