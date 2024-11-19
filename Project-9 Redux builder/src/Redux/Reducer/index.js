
import { combineReducers } from "redux";
import reducer from "./noteReducer";

const mainreducer = combineReducers({
    crud : reducer
})

export default mainreducer
