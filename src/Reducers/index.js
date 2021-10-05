import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import fileShareReducer from "./fileShareReducer";

const rootReducer = combineReducers({
    auth:authReducer,
    userInfo:userReducer,
    uploadedFileInfo:fileShareReducer
})

export default rootReducer;