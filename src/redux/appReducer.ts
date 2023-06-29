import {getAuthUserData} from "./authReducer";
import {InferActionsType} from "./reduxStore";




let initialState = {
    initialized: false,
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsType<typeof actions>

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'SN/APP/INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;

    }
}

//ACTIONS CREATE


export const actions = {
    initializedSuccess: ()  => ({type: 'SN/APP/INITIALIZED_SUCCESS'} as const)
}


//THUNK CREATE
export const initializeApp = () => (dispatch : any) => {
    let promise = dispatch(getAuthUserData());
    promise.then(() => {
        dispatch(actions.initializedSuccess());
    });
}


export default appReducer;