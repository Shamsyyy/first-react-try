import {getAuthUserData} from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialState = {
    initialized: null,

}
const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;

    }
}

//ACTIONS CREATE
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})
    //THUNK CREATE
    export const initializeApp = () => (dispatch) => {
        let promise = dispatch(getAuthUserData());
        promise.then(() => {
            dispatch(initializedSuccess());
    });
}


export default appReducer;