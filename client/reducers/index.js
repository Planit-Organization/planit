import { combineReducers } from "redux";
import dayViewReducer from './dayViewReducer';

import recommendationReducer from './recommendationReducer';

import loginReducer from "./loginReducer";



const reducers = combineReducers({
  // if we had other reducers, they would go here

  recommendation: recommendationReducer,

  login: loginReducer

});

export default reducers;
