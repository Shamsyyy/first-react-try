import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Navigate} from "react-router-dom";
const Dialogs = (props) => {
debugger
    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Message key={m.id} message={m.message}/>)

    let newMessageElement = React.createRef();
    let sendMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.onMessageChange(text);
    }

    if (!props.isAuth) return <Navigate to={"/Login"}/>;

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
                                  value={props.newMessageText}></textarea>
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