import {
    GET_CONOVO_BY_USER,
    GET_CONOVO_IN_FORUM,
    GET_CONOVO_IN_FORUM_SUCCESS,
    GET_CONVO_BY_USER_SUCCESS,
    SEND_MESSAGE,
    SEND_MESSAGE_IN_FORUM,
    SEND_MESSAGE_IN_FORUM_SUCCESS,
    SEND_MESSAGE_SUCCESS,
  } from "../actionTypes";
  
  const conVoIniState = {
    user: 0,
    conversation: [],
    loading: false,
  };
  
  const forumReducer = (state = conVoIniState, action) => {
    let { type, payload } = action;
  
    switch (type) {
      case GET_CONOVO_IN_FORUM:
        return { ...state, loading: true };
      case GET_CONOVO_IN_FORUM_SUCCESS:
        return { ...state, loading: false, conversation: payload };
      case SEND_MESSAGE_IN_FORUM:
        return { ...state, loading: true };
      case SEND_MESSAGE_IN_FORUM_SUCCESS:
        return { ...state, loading: false };
      default:
        return state;
    }
  };
  
  export default forumReducer;
  