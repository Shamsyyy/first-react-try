import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
const Dialogs = (props) => {
debugger
    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Message key={m.id} message={m.message}/>)

/*    let newMessageElement = React.createRef();
    let sendMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.onMessageChange(text);
    }*/
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageText)
    }



    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div className={classes.addPost}>
                    <AddMessageFormRedux onSubmit={addNewMessage} />
                </div>
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name={"newMessageText"} placeholder={"Enter you text"}/>
            </div>
            <div>
                <button>Send a message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;