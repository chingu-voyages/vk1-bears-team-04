import { combineReducers } from "redux";
import auth from "./authReducers";
import token from "./tokenReducer";
import users from "./usersReducer";

export default combineReducers({
  auth,
  token,
  users,
});
