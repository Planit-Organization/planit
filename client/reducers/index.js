import { combineReducers } from "redux";
import loginReducer from "./loginReducer";


const reducers = combineReducers({
  // if we had other reducers, they would go here
  login: loginReducer
});

export default reducers;
