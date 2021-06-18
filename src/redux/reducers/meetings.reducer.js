import {
  GET_ALL_MEETINGS_ACCEPTED,
  GET_ALL_MEETINGS_ACCEPTED_SUCCESS,
  GET_ALL_MEETINGS_PENDING,
  GET_ALL_MEETINGS_PENDING_SUCCESS,
} from "../actionTypes";

export const meetingsInitState = {
  loading: false,
  pendingList: [],
  acceptedList: [],
  selectedMeeting: {},
};

const meetingReducer = (state = meetingsInitState, action) => {
  let { type, payload } = action;
  switch (type) {
    case GET_ALL_MEETINGS_PENDING:
      return { ...state, loading: true };
    case GET_ALL_MEETINGS_ACCEPTED:
      return { ...state, loading: true };
    case GET_ALL_MEETINGS_ACCEPTED_SUCCESS:
      return { ...state, loading: false, acceptedList: payload };
    case GET_ALL_MEETINGS_PENDING_SUCCESS:
      return { ...state, loading: false, pendingList: payload };
    case "SET_SELECTED_MEETING":
      return { ...state, selectedMeeting: payload };

    default:
      return state;
  }
};

export default meetingReducer;
