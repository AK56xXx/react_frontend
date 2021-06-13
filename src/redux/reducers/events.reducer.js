import { ADD_EVENT } from "../actionTypes";

const initEventState = {
  loading: false,
  eventList: [],
};

export const eventReducer = (state = initEventState, action) => {
  let { type, payload } = action;
  switch (type) {
    case ADD_EVENT:
      return { ...state, eventList: [...state.eventList, payload] };

    default:
      return state ; 
  }
};
