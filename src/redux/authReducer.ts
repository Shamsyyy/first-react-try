import {authAPI, securityAPI} from "../API/api";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS';


export type InitialStateType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    isFetching: boolean,
    captchaUrl: string | null,
}

let initialState : InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    captchaUrl: null,

}
const authReducer = (state = initialState, action: any) : InitialStateType => {

    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;

    }
}

//ACTIONS CREATE

type SetAuthUserDataActionPayloadType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload: SetAuthUserDataActionPayloadType
}

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) : SetAuthUserDataActionType =>
    ({type: SET_USER_DATA, payload: {id, email, login, isAuth}})

type GetCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    payload: { captchaUrl: string }
}
export const getCaptchaUrlSuccess = (captchaUrl: string) :GetCaptchaUrlSuccessActionType =>
    ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}})

//THUNK CREATE
export const getAuthUserData = () => async (dispatch : any) => {
    let response = await authAPI.loginMe()  //get API
    if (response.data.resultCode === 0) {
        let {email, id, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true))
    }
}
export const login = (email :string, password :string, rememberMe :boolean, captcha :any) => async (dispatch :any) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)  //get API
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}));
    }
}
export const getCaptchaUrl = () => async (dispatch: any) => {
    const response = await securityAPI.getCaptchaUrl()  //get API
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}
export const logout = () => async (dispatch: any) => {
    let response = await authAPI.logout()  //get API
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer;