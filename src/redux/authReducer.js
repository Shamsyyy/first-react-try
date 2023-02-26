import {authAPI} from "../API/api";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,

}
const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;

    }
}

//ACTIONS CREATE
export const setAuthUserData = (id, email, login, isAuth) =>
    ({type: SET_USER_DATA, payload: {id, email, login, isAuth}})
export const getAuthUserData = () => (dispatch) => {
    authAPI.loginMe()  //get API
        .then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login, true))
            }
        });
}
export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)  //get API
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        });
}
export const logout = () => (dispatch) => {
    authAPI.logout()  //get API
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        });
}

export default authReducer;