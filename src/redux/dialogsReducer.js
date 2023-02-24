const ADD_MESSAGE = 'ADD-MESSAGE';
// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Daur'},
        {id: 2, name: 'Dimych'},
        {id: 3, name: 'Diana'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Misha'},
        {id: 6, name: 'Pasha'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your course?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ]
}
const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let NewMessage = {
                id: 6,
                message: action.newMessageText
            }
            return  {
                ...state,
                messages: [...state.messages, NewMessage],
                newMessageText: ''
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


export const addMessageCreator = (newMessageText) => ({type: ADD_MESSAGE, newMessageText})
/*
export const updateNewMessageTextCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT, newText: text
})
*/

export default dialogsReducer;