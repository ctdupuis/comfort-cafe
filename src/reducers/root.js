import { combineReducers } from "redux";
import userReducer from "./userReducer";
import loadReducer from "./loadReducer";
import itemReducer from "./itemReducer";

const rootReducer = combineReducers({
    userReducer,
    loadReducer,
    itemReducer
});

export default rootReducer;