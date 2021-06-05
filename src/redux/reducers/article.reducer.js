import { GET_ARTICLES, GET_ARTICLES_SUCCESS } from "../actionTypes";

const articleInitState = {
  loading: false,
  articles: [],
};

const articlesReducer = (state = articleInitState, action) => {
  let { payload, type } = action;
  switch (type) {
    case GET_ARTICLES:
      return { ...state, loading: true };
    case GET_ARTICLES_SUCCESS:
      return { ...state, loading: false, articles: payload };

    default:
      return state;
  }
};

export default articlesReducer ; 