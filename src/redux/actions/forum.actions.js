import { getApi, postApi } from "../../utils/apiUtils";
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

export const getConvoInForum = () => {
  return {
    type: GET_CONOVO_IN_FORUM,
  };
};

export const getConvoInForumSuccess = (data) => {
  return {
    type: GET_CONOVO_IN_FORUM_SUCCESS,
    payload: data,
  };
};

export const sendMessageInForum = () => {
  return {
    type: SEND_MESSAGE_IN_FORUM,
  };
};

export const sendMessageInForumSuccess = () => {
  return {
    type: SEND_MESSAGE_IN_FORUM_SUCCESS,
  };
};
export const getConvoInForumApi = () => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");
    let config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    let result = await getApi(
      "forum",

      config
    );
    dispatch(getConvoInForumSuccess(result.result));
  } catch (error) {
    console.log(error.message);
  }
};

export const sendForumMessageApi = (sender, message) => async (dispatch) => {
 
  try {
    dispatch(sendMessageInForum());
    let token = localStorage.getItem("token");
    let config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    let result = await postApi(
      "forum",
      {
        sender: sender,

        message: message,
      },
      config
    );
    dispatch(sendMessageInForumSuccess());
    dispatch(getConvoInForumApi());
  } catch (error) {
    console.log(error.message);
  }
};
