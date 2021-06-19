import {
  GET_CONOVO_BY_USER,
  GET_CONVO_BY_USER_SUCCESS,
  SEND_MESSAGE,
  SEND_MESSAGE_SUCCESS,
} from "../actionTypes";

const conVoIniState = {
  user: 0,
  conversation: [],
  loading: false,
};

const conVoReducer = (state = conVoIniState, action) => {
  let { type, payload } = action;

  switch (type) {
    case GET_CONOVO_BY_USER:
      return { ...state, loading: true };
    case GET_CONVO_BY_USER_SUCCESS:
      return { ...state, loading: false, conversation: payload };
    case SEND_MESSAGE:
      return { ...state, loading: true };
    case SEND_MESSAGE_SUCCESS:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default conVoReducer;
