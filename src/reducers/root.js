import { combineReducers } from "redux";
import userReducer from "./userReducer";
import loadReducer from "./loadReducer";

const rootReducer = combineReducers({
    userReducer,
    loadReducer
});

export default rootReducer;