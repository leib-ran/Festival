import { ISLOGIN } from "../actions/types";
import { getToken } from "../helper/config";

export const isLoginReducer = (state = true, action) => {
  switch (action.type) {
    case ISLOGIN:
      return action.payload;
  }
  return state;
};
