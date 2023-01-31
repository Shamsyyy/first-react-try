import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)

    let newMessageElement = React.createRef();
    let sendMessage = () => {
        let text = newMessageElement.current.value;
        alert(text)
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
                        <textarea ref={newMessageElement}></textarea>
                    </div>
                    <div>
                        <button onClick={ sendMessage }>Send a message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;