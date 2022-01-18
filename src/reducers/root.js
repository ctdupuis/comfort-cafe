import { combineReducers } from "redux";
import userReducer from "./manageUsers";
import loadReducer from "./manageLoad";

const rootReducer = combineReducers({
    userReducer,
    loadReducer
});

export default rootReducer;