import { GET_USER_LIST, GEt_USER_LIST_SUCCESS } from "../actionTypes";
import { getApi } from "../../utils/apiUtils";
export const getUsers = () => {
  return {
    type: GET_USER_LIST,
  };
};

export const getUsersSuccess = (payload) => {
  return {
    type: GEt_USER_LIST_SUCCESS,
    payload: payload,
  };
};

export const getUsersApi = () => async (dispatch) => {
  try {
    dispatch(getUsers());
    let result = await getApi("chat");
    if (result) {
      dispatch(getUsersSuccess(result.result))
    }
  } catch (error) {
    console.log(error.message);
  }
};
