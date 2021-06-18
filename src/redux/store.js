import { createStore, combineReducers,applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import authReducer from "./reducers/auth.reducer";
import {composeWithDevTools} from 'redux-devtools-extension'
import articlesReducer from "./reducers/article.reducer";
import { eventReducer } from "./reducers/events.reducer";
import usersReducer from "./reducers/users.reducer";
import meetingReducer from "./reducers/meetings.reducer";
const rootReducer = combineReducers({
  auth: authReducer,
  articles:articlesReducer, 
  events:eventReducer, 
  users:usersReducer, 
  meetings:meetingReducer
});
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
export default store ; 