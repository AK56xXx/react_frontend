import { getApi, postApi } from "../../utils/apiUtils";
import {
  ADD_NEW_MEETING,
  ADD_NEW_MEETING_SUCCESS,
  GET_ALL_MEETINGS_ACCEPTED,
  GET_ALL_MEETINGS_ACCEPTED_SUCCESS,
  GET_ALL_MEETINGS_PENDING,
  GET_ALL_MEETINGS_PENDING_SUCCESS,
} from "../actionTypes";

export const addNewMeeting = () => {
  return {
    type: ADD_NEW_MEETING,
  };
};
export const addNewMeetingSuccess = () => {
  return {
    type: ADD_NEW_MEETING_SUCCESS,
  };
};

export const addNewMeetingApi = (body, toast) => async (dispatch) => {
  try {
    let result = await postApi("meetings", body);
    if (result.success) {
      toast("Votre demande à été déja envoyé ", {
        appearance: "success",
        autoDismiss: true,
      });
    } else {
      toast("Une demande est déja en cours ", {
        appearance: "error",
        autoDismiss: true,
      });
    }
    console.log(result);
  } catch (error) {
    toast(error.message, {
      appearance: "error",
      autoDismiss: true,
    });
  }
};

export const getAllPendingMeetings = () => {
  return {
    type: GET_ALL_MEETINGS_PENDING,
  };
};
export const getAllPendingMeetingsSuccess = (data) => {
  return {
    type: GET_ALL_MEETINGS_PENDING_SUCCESS,
    payload: data,
  };
};

export const getAllAcceptedMeetings = () => {
  return {
    type: GET_ALL_MEETINGS_ACCEPTED,
  };
};
export const getAllAcceptedMeetingsSuccess = (data) => {
  return {
    type: GET_ALL_MEETINGS_ACCEPTED_SUCCESS,
    payload: data,
  };
};

export const getPendingMeetingApi = () => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");
    let config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    dispatch(getAllPendingMeetings());
    let result = await getApi("meetings/0", config);
    if (result.success) {
      dispatch(getAllPendingMeetingsSuccess(result.result));
    }
  } catch (error) {
    console.log(error.message);
  }
};
export const getAcceptedgMeetingApi = () => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");
    let config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    dispatch(getAllAcceptedMeetings());
    let result = await getApi("meetings/1", config);
    if (result.success) {
      dispatch(getAllAcceptedMeetingsSuccess(result.result));
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const acceptMeetingApi = (id,body, toast) => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");
    let config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    let result = await postApi("meetings/accepter/" + id,body, config);
    if (result.success) {
        toast("Confirmation réussite ", { appearance: "success" });
        dispatch(getAcceptedgMeetingApi()); 
        dispatch(getPendingMeetingApi()); 
    }
  } catch (error) {}
};

export const refuserMeetingApi = (id,body, toast) => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");
    let config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    let result = await postApi("meetings/accepter/" + id,body, config);
    if (result.success) {
        toast("Confirmation réussite ", { appearance: "success" });
        dispatch(getAcceptedgMeetingApi()); 
        dispatch(getPendingMeetingApi()); 
    }
  } catch (error) {}
};
