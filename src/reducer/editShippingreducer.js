import { EDITSHIPPINGDETAILS } from "../actions/types";

const initialState = false;

export const editShippingReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDITSHIPPINGDETAILS:
      return action.payload;
  }
  return state;
};
