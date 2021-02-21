import counterReducer from "./counterReducer";
import loggedReducer from "./loggedReducer";
import { combineReducers } from "redux";
import getAllPeopleReducer from "./getAllPeople";

const rootReducer = combineReducers({
  counter: counterReducer,
  logged: loggedReducer,
  allpeople: getAllPeopleReducer,
});

export default rootReducer;
