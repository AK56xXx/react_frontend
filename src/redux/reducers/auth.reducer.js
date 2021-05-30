import { AUTH_USER, AUTH_USER_FAILED, AUTH_USER_SUCCESS } from "../actionTypes";

const authInitState = {
  auth: false,
  token: "",
  loading: false,
};

const authReducer = (state = authInitState, action) => {
  let { type, payload } = action;
  switch (type) {
    case AUTH_USER:
      return { ...state, loading: true };
    case AUTH_USER_SUCCESS:
      return { ...state, loading: false, token: payload };
    case AUTH_USER_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default authReducer;
