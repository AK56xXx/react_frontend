import { ADD_EVENT } from "../actionTypes";

export const addNewEvent = (payload) => {
  return {
    type: ADD_EVENT,
    payload: payload,
  };
};
