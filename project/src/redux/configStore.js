/** @format */

import { combineReducers, applyMiddleware, legacy_createStore  } from "redux";
import { MainReducer } from "./Reducer/MainReducer";
import thunk from "redux-thunk";


const rootReducers = combineReducers({
    MainReducer
});
export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
