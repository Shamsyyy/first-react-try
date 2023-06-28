import {applyMiddleware, combineReducers} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import {configureStore} from "@reduxjs/toolkit";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import appReducer from "./appReducer";


let rootReducer = combineReducers({
    dialogsReducer,
    profileReducer,
    sidebarReducer,
    usersReducer,
    authReducer,
    appReducer,
    form: formReducer
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never

export type InferActionsType<T extends {[key: string]: (...args: any[])=> any}> = ReturnType<PropertiesTypes<T>>

export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunkMiddleware] // заменили applyMiddleware на middleware
});

// @ts-ignore
window.store = store;

export default store;