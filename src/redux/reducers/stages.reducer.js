import {
  GET_ALL_MEETINGS_ACCEPTED,
  GET_ALL_MEETINGS_ACCEPTED_SUCCESS,
  GET_ALL_MEETINGS_PENDING,
  GET_ALL_MEETINGS_PENDING_SUCCESS,
  GET_ALL_STAGES_ACCEPTED,
  GET_ALL_STAGES_ACCEPTED_SUCCESS,
  GET_ALL_STAGES_PENDING,
  GET_ALL_STAGES_PENDING_SUCCESS,
  GET_ALL_VISITES_ACCEPTED,
  GET_ALL_VISITES_ACCEPTED_SUCCESS,
  GET_ALL_VISITES_PENDING,
  GET_ALL_VISITES_PENDING_SUCCESS,
} from "../actionTypes";

export const meetingsInitState = {
  loading: false,
  pendingList: [],
  acceptedList: [],
  selectedMeeting: {},
  confirmed: false,
};

const stagesReducer = (state = meetingsInitState, action) => {
  let { type, payload } = action;
  switch (type) {
    case GET_ALL_STAGES_PENDING:
      return { ...state, loading: true };
    case GET_ALL_STAGES_ACCEPTED:
      return { ...state, loading: true };
    case GET_ALL_STAGES_ACCEPTED_SUCCESS:
      return { ...state, loading: false, acceptedList: payload };
    case GET_ALL_STAGES_PENDING_SUCCESS:
      return { ...state, loading: false, pendingList: payload };
    case "SET_SELECTED_STAGES":
      return {
        ...state,
        selectedMeeting: payload.meeting,
        confirmed: payload.confirmed,
      };

    default:
      return state;
  }
};

export default stagesReducer;
