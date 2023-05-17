import {getAuthUserData} from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export type InitialStateType = {
    initialized: boolean | null;
}

let initialState: InitialStateType = {
    initialized: null,

}
const appReducer = (state = initialState, action: any): InitialStateType => {

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

type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS // "INITIALIZED_SUCCESS"
}
export const initializedSuccess = () : InitializedSuccessActionType => ({type: INITIALIZED_SUCCESS})
//THUNK CREATE
export const initializeApp = () => (dispatch : any) => {
    let promise = dispatch(getAuthUserData());
    promise.then(() => {
        dispatch(initializedSuccess());
    });
}


export default appReducer;