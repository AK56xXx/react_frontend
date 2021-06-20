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

export const authUserApi =(body,navigator)=> async dispatch => {
    dispatch(authUser()) ; 
    let result = await postApi('login',body) ; 
    localStorage.setItem('token',result.result.token) ; 
    localStorage.setItem('userId',result.result.user.id) ; 
    console.log(result.result)
    if(result.success)
    {
        dispatch(authUserSuccess(result.result)); 
        navigator.replace('main')
    }else
    {
        dispatch(authUserFailed()); 
    }
}