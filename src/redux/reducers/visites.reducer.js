import {
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
    confirmed:false 
  };
  
  const vistesReducer = (state = meetingsInitState, action) => {
    let { type, payload } = action;
    switch (type) {
      case GET_ALL_VISITES_PENDING:
        return { ...state, loading: true };
      case GET_ALL_VISITES_ACCEPTED:
        return { ...state, loading: true };
      case GET_ALL_VISITES_ACCEPTED_SUCCESS:
        return { ...state, loading: false, acceptedList: payload };
      case GET_ALL_VISITES_PENDING_SUCCESS:
        return { ...state, loading: false, pendingList: payload };
      case "SET_SELECTED_VISITES":
        return { ...state, selectedMeeting: payload.meeting,confirmed:payload.confirmed };
  
      default:
        return state;
    }
  };
  
  export default vistesReducer;
  