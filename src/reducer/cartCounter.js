import { SETQUANTITY } from "../actions/types";

const initialState = localStorage.getItem("quan") || 0;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREAMENT":
      return Number(state) + Number(action.payload);

    case "DECREAMENT":
      return Number(state) - Number(action.payload);
    case SETQUANTITY:
      return action.payload;
  }
  return state;
};

export default counterReducer;
