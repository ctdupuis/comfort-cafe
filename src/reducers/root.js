import { combineReducers } from "redux";
import userReducer from "./manageUsers";

const rootReducer = combineReducers({
    userReducer
});

export default rootReducer;