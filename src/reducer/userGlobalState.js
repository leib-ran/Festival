import { USER } from "../actions/types";
import { getUser } from "../helper/userTools";

const initialState = {};
export const userGlobalState = async (state = initialState, action) => {
  switch (action.type) {
    case USER:
      console.log(action.payload.status);

      return Promise.resolve(action.payload);
  }
  return state;
};
