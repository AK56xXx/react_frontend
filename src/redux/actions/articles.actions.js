import { getApi } from "../../utils/apiUtils";
import { GET_ARTICLES, GET_ARTICLES_SUCCESS } from "../actionTypes";

export const getArticles = () => {
  return {
    type: GET_ARTICLES,
  };
};
export const getArticlesSucces = (data) => {
  return {
    type: GET_ARTICLES_SUCCESS,
    payload: data,
  };
};

export const getArticlesApi = () => async (dispatch) => {
    dispatch(getArticles())
    let token = localStorage.getItem('token') ; 
    let config = {
      headers: { Authorization: `Bearer ${token}` }
  };
  let result = await getApi("actualites",config); 
  if(result.success)
  {
      dispatch(getArticlesSucces(result.result))
  }
};
