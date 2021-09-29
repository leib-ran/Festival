import { SUBCATEGORYTYPE } from "../actions/types";

const initialState = "";

export const subCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBCATEGORYTYPE:
      return action.payload;
  }
  return state;
};
