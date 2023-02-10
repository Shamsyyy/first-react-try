import {combineReducers} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import {configureStore} from "@reduxjs/toolkit";

let rootReducers = combineReducers({
    dialogsReducer,
    profileReducer,
    sidebarReducer,
});

export const store = configureStore({
    reducer: rootReducers
})

window.store = store;

export default store;