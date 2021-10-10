import { FESTIVALINK, FESTIVALSHOW, FESTIVAWELCOMING } from "../actions/types";

const intialState = 1;
export const modalFestivalReducer = (state = intialState, action) => {
  switch (action.type) {
    case FESTIVALINK:
      return -1;
    case FESTIVAWELCOMING:
      return 0;
    case FESTIVALSHOW:
      return 1;
  }
  return state;
};
