const ADD_MESSAGE = 'ADD-MESSAGE';
const UNDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let NewMessage = {
                id: 6,
                message: state.newMessageText
            }
            state.messages.push(NewMessage);
            state.newMessageText = '';
            break;
        case UNDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            break;
        default:
            break;
    }
    return state;
}

export const addMessageCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextCreator = (text) => ({
    type: UNDATE_NEW_MESSAGE_TEXT, newText: text
})

export default dialogsReducer;