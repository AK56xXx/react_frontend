import { postApi } from "../../utils/apiUtils";
import { AUTH_USER, AUTH_USER_FAILED, AUTH_USER_SUCCESS } from "../actionTypes";

export const authUser = () => {
  return {
    type: AUTH_USER,
  };
};

export const authUserSuccess = (token) => {
  return {
    type: AUTH_USER_SUCCESS,
    payload: token,
  };
};

export const authUserFailed = () => {
  return {
    type: AUTH_USER_FAILED,
  };
};

export const authUserApi =(body)=> async dispatch => {
    dispatch(authUser()) ; 
    let result = await postApi('login',body) ; 
    if(result.success)
    {
        dispatch(authUserSuccess(result.result))
    }else
    {
        dispatch(authUserFailed()); 
    }
}