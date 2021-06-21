import { postApi, getApi } from "../../utils/apiUtils";
import {
  ADD_NEW_VISITE,
  ADD_NEW_VISITE_SUCCESS,
  GET_ALL_VISITES_ACCEPTED,
  GET_ALL_VISITES_ACCEPTED_SUCCESS,
  GET_ALL_VISITES_PENDING,
  GET_ALL_VISITES_PENDING_SUCCESS,
} from "../actionTypes";


export const addNewVisite = () => {
  return {
    type: ADD_NEW_VISITE,
  };
};

export const addNewVisiteSuccess = () => {
  return {
    type: ADD_NEW_VISITE_SUCCESS,
  };
};

export const addNewVisiteApi = (data, toast) => async (dispatch) => {
  try {
    dispatch(addNewVisite());
    let result = await postApi("visits", data);
    if (result.success) {
      dispatch(addNewVisiteSuccess());
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

export const getPendingVisitesApi = () => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");
    console.log("Token", token);
    let config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    console.log("CONFIG", config);
    dispatch(getAllPendingVisites());
    let result = await getApi("visits/0", config);
    if (result.success) {
      dispatch(getAllPendingVisitesSuccess(result.result));
    }
  } catch (error) {
    console.log(error.message);
  }
};
export const getAcceptedVisitApi = () => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");
    let config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    dispatch(getAllAccepedVisites());
    let result = await getApi("visits/1", config);
    if (result.success) {
      dispatch(getAllAcceptedVisitesSuccess(result.result));
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const acceptvisitesApi = (id, body, toast) => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");
    let config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    let result = await postApi("visits/accepter/" + id, body, config);
    if (result.success) {
      toast("Confirmation réussite ", { appearance: "success" });
      dispatch(getAcceptedVisitApi());
      dispatch(getPendingVisitesApi());
    }
  } catch (error) {}
};
export const refuseVisitesApi = (id, body, toast) => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");
    let config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    let result = await postApi("visits/refuser/" + id, body, config);
    if (result.success) {
      toast("Confirmation réussite ", { appearance: "success" });
      dispatch(getAcceptedVisitApi());
      dispatch(getPendingVisitesApi());
    }
  } catch (error) {}
};


export const getAllPendingVisites = () => {
  return {
    type: GET_ALL_VISITES_PENDING,
  };
};
export const getAllPendingVisitesSuccess = (data) => {
  return {
    type: GET_ALL_VISITES_PENDING_SUCCESS,
    payload: data,
  };
};

export const getAllAccepedVisites = () => {
  return {
    type: GET_ALL_VISITES_ACCEPTED,
  };
};
export const getAllAcceptedVisitesSuccess = (data) => {
  return {
    type: GET_ALL_VISITES_ACCEPTED_SUCCESS,
    payload: data,
  };
};
