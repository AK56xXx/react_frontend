import { postApi } from "../../utils/apiUtils";
import {
  GET_CONOVO_BY_USER,
  GET_CONVO_BY_USER_SUCCESS,
  SEND_MESSAGE,
  SEND_MESSAGE_SUCCESS,
} from "../actionTypes";

export const getConvoByUser = () => {
  return {
    type: GET_CONOVO_BY_USER,
  };
};

export const getConvoByUserSuccess = (data) => {
  return {
    type: GET_CONVO_BY_USER_SUCCESS,
    payload: data,
  };
};

export const sendMessage = () => {
  return {
    type: SEND_MESSAGE,
  };
};

export const sendMessageSuccess = () => {
  return {
    type: SEND_MESSAGE_SUCCESS,
  };
};
export const getConvoByUserApi = (sender, receiver) => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");
    let config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    let result = await postApi(
      "chat/fetch_messages",
      {
        sender_id: sender,
        receiver_id: receiver,
      },
      config
    );
    dispatch(getConvoByUserSuccess(result.result));
  } catch (error) {
    console.log(error.message);
  }
};

export const sendMessageApi =
  (sender, receiver, message) => async (dispatch) => {
      console.log("RECEIVER",receiver)
    try {
      dispatch(sendMessage());
      let token = localStorage.getItem("token");
      let config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      let result = await postApi(
        "chat/send_message",
        {
          sender_id: sender,
          receiver_id: receiver,
          message: message,
        },
        config
      );
      dispatch(sendMessageSuccess());
      dispatch(getConvoByUserApi(sender, receiver));
    } catch (error) {
      console.log(error.message);
    }
  };
