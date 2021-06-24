import { combineReducers } from "redux";
import dayViewReducer from './dayViewReducer';
import recommendationReducer from './recommendationReducer';
import calendarReducer from './calendarReducer';
import loginReducer from "./loginReducer";



const reducers = combineReducers({
  // if we had other reducers, they would go here

  recommendation: recommendationReducer,
  calendar: calendarReducer,
  login: loginReducer,
  dayView: dayViewReducer

});

export default reducers;
