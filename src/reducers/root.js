import { combineReducers } from "redux";
import userReducer from "./userReducer";
import loadReducer from "./loadReducer";
import itemReducer from "./itemReducer";
import alertReducer from "./alertReducer";

const rootReducer = combineReducers({
    userReducer,
    loadReducer,
    itemReducer,
    alertReducer
});

export default rootReducer;