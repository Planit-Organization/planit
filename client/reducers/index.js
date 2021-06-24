import { combineReducers } from "redux";
import recommendationReducer from './recommendationReducer';


const reducers = combineReducers({
  // if we had other reducers, they would go here
  recommendation: recommendationReducer,
});

export default reducers;
