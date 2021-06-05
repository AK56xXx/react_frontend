import { createStore, combineReducers,applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import authReducer from "./reducers/auth.reducer";
import {composeWithDevTools} from 'redux-devtools-extension'
import articlesReducer from "./reducers/article.reducer";
const rootReducer = combineReducers({
  auth: authReducer,
  articles:articlesReducer
});
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
export default store ; 