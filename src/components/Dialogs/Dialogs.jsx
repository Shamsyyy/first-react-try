import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>)

    let newMessageElement = React.createRef();
    let sendMessage = () => {
        props.dispatch({type: 'ADD-MESSAGE'});
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text});
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div className={classes.addPost}>
                    <div>
                        <textarea onChange={onMessageChange} ref={newMessageElement}
                                  value={props.dialogsPage.newMessageText}></textarea>
                    </div>
                    <div>
                        <button onClick={sendMessage}>Send a message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;