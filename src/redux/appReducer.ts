import {getAuthUserData} from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export type initialStateType = {
    initialized: boolean | null;
}

let initialState: initialStateType = {
    initialized: null,

}
const appReducer = (state = initialState, action: any): initialStateType => {

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

type initializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS // "INITIALIZED_SUCCESS"
}
export const initializedSuccess = () : initializedSuccessActionType => ({type: INITIALIZED_SUCCESS})
    //THUNK CREATE
    export const initializeApp = () => (dispatch : any) => {
        let promise = dispatch(getAuthUserData());
        promise.then(() => {
            dispatch(initializedSuccess());
    });
}


export default appReducer;