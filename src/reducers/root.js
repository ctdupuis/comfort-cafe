import { combineReducers } from "redux";
import userReducer from "./userReducer";
import loadReducer from "./loadReducer";
import itemReducer from "./itemReducer";
import alertReducer from "./alertReducer";
import orderReducer from "./orderReducer";

const rootReducer = combineReducers({
    userReducer,
    loadReducer,
    itemReducer,
    alertReducer,
    orderReducer
});

export default rootReducer;