import {ResultCodeForCaptchaEnum, ResultCodesEnum} from "../API/api";
import {FormAction, stopSubmit} from "redux-form";
import {authAPI} from "../API/authAPI";
import {securityAPI} from "../API/securityAPI";
import {BaseThunkType, InferActionsType} from "./reduxStore";


let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    isFetching: false,
    captchaUrl: null as string | null,
}
/*
type InitialStateType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    isFetching: boolean,
    captchaUrl: string | null,
}*/
export type InitialStateType = typeof initialState;
type ActionsTypes = InferActionsType<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes | FormAction>

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "SN/AUTH/SET_USER_DATA":
        case "SN/AUTH/GET_CAPTCHA_URL_SUCCESS":
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;

    }
}

//ACTIONS CREATE
export const actions = {
    setAuthUserData: (id: number | null, email: string | null, login: string | null, isAuth: boolean)  =>
        ({type: 'SN/AUTH/SET_USER_DATA', payload: {id, email, login, isAuth}} as const),

    getCaptchaUrlSuccess: (captchaUrl: string)  =>
    ({type: 'SN/AUTH/GET_CAPTCHA_URL_SUCCESS', payload: {captchaUrl}} as const)
}


//THUNK CREATE
export const getAuthUserData = (): ThunkType => async (dispatch) => {
    let response = await authAPI.loginMe()  //get API
    if (response.data.resultCode === ResultCodesEnum.Success) {
        let {email, id, login} = response.data.data;
        dispatch(actions.setAuthUserData(id, email, login, true))
    }
}
export const login = (email :string, password :string, rememberMe :boolean, captcha :string): ThunkType => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)  //get API
    if (response.data.resultCode === ResultCodesEnum.Success) {
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
            dispatch(getCaptchaUrl())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}));
    }
}
export const getCaptchaUrl = () => async (dispatch: any) => {
    const response = await securityAPI.getCaptchaUrl()  //get API
    const captchaUrl = response.data.url
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
}
export const logout = () => async (dispatch: any) => {
    let response = await authAPI.logout()  //get API
    if (response.data.resultCode === 0) {
        dispatch(actions.setAuthUserData(null, null, null, false))
    }
}

export default authReducer;