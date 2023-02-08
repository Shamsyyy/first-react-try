import React from "react";
import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    debugger
    let state = props.store.getState().dialogsReducer
    let sendMessage = () => {
        props.store.dispatch(addMessageCreator());
    }

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextCreator(text));
    }

    return (
        <Dialogs onMessageChange={onMessageChange}
                 sendMessage={sendMessage}
                 dialogsPage={state}
                 dialogs={state.dialogs}
                 messsages={state.messages}
                 newMessageText={state.newMessageText}/>
    )
}

export default DialogsContainer;