import {InferActionsType} from "./reduxStore";

// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

type DialogType = {
    id: number,
    name: string
}
type MessageType = {
    id: number,
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Daur'},
        {id: 2, name: 'Dimych'},
        {id: 3, name: 'Diana'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Misha'},
        {id: 6, name: 'Pasha'},
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your course?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ] as Array<MessageType>
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsType<typeof actions>

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case "SN/DIALOGS/ADD-MESSAGE":
            let NewMessage = {
                id: 6,
                message: action.newMessageText
            }
            return {
                ...state,
                messages: [...state.messages, NewMessage],
                /*newMessageText: ''*/
            }
        /*case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }*/
        default:
            return state;

    }
}

export const actions = {
    addMessageCreator: (newMessageText: string) => ({type: 'SN/DIALOGS/ADD-MESSAGE', newMessageText} as const)
}

/*
export const updateNewMessageTextCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT, newText: text
})
*/

export default dialogsReducer;