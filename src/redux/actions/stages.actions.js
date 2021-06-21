import { postApi,getApi } from "../../utils/apiUtils";
import { ADD_NEW_STAGE, ADD_NEW_STAGE_SUCCESS, GET_ALL_STAGES_ACCEPTED, GET_ALL_STAGES_ACCEPTED_SUCCESS, GET_ALL_STAGES_PENDING, GET_ALL_STAGES_PENDING_SUCCESS } from "../actionTypes";

export const addNewStage = () => {
  return {
    type: ADD_NEW_STAGE,
  };
};

export const addNewStageSuccess = () => {
  return {
    type: ADD_NEW_STAGE_SUCCESS,
  };
};

export const getAllPendingStages = () => {
    return {
      type: GET_ALL_STAGES_PENDING,
    };
  };
  export const getAllPendingStagesSuccess = (data) => {
    return {
      type: GET_ALL_STAGES_PENDING_SUCCESS,
      payload: data,
    };
  };
  
  export const getAllAcceptedStages = () => {
    return {
      type: GET_ALL_STAGES_ACCEPTED,
    };
  };
  export const getAllAcceptedStagesSuccess = (data) => {
    return {
      type: GET_ALL_STAGES_ACCEPTED_SUCCESS,
      payload: data,
    };
  };

export const addNewStageApi = (data, toast) => async (dispatch) => {
  try {
    dispatch(addNewStage());
    let result = await postApi("stages", data);
    if (result.success) {
      dispatch(addNewStageSuccess());
      toast("Votre demande à été envoyé", {
        appearance: "success",
        autoDismiss: true,
      });
    } else {
        toast("Vous avez déja une demande en cours ", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  } catch (error) {
    console.log(error);
  }
};


export const getPendingStagesApi = () => async (dispatch) => {
    try {
      let token = localStorage.getItem("token");
      console.log("Token",token) ; 
      let config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      console.log("CONFIG",config) ; 
      dispatch(getAllPendingStages());
      let result = await getApi("stages/0", config);
      if (result.success) {
        dispatch(getAllPendingStagesSuccess(result.result));
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  export const getAcceptedgStagesApi = () => async (dispatch) => {
    try {
      let token = localStorage.getItem("token");
      let config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      dispatch(getAllAcceptedStages());
      let result = await getApi("stages/1", config);
      if (result.success) {
        dispatch(getAllAcceptedStagesSuccess(result.result));
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const acceptStagesApi = (id,body, toast) => async (dispatch) => {
    try {
      let token = localStorage.getItem("token");
      let config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      let result = await postApi("stages/accepter/" + id,body, config);
      if (result.success) {
          toast("Confirmation réussite ", { appearance: "success" });
          dispatch(getAcceptedgStagesApi()); 
          dispatch(getPendingStagesApi()); 
      }
    } catch (error) {}
  };
  export const RefuseStagesApi = (id,body, toast) => async (dispatch) => {
    try {
      let token = localStorage.getItem("token");
      let config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      let result = await postApi("stages/refuser/" + id,body, config);
      if (result.success) {
          toast("Confirmation réussite ", { appearance: "success" });
          dispatch(getAcceptedgStagesApi()); 
          dispatch(getPendingStagesApi()); 
      }
    } catch (error) {}
  };
  