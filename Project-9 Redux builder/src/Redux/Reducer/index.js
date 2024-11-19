

import { combineReducers } from "redux";
import reducer from "./noteReducer";

const rootreducer = combineReducers({
    crud : reducer
})

export default rootreducer
