import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators";
import {createField, Input, Textarea} from "../Common/FormsControls/FormsControls";
import DialogsReducer, {InitialStateType} from "../../redux/dialogsReducer";
import {LoginFormValuesType} from "../Login/Login";
import dialogsReducer from "../../redux/dialogsReducer";

type ItemType = {
    name: string
    id: number
    message: string
}


type OwnPropsType = {
    dialogsPage: InitialStateType
    dialogs: Array<ItemType>
    messages: Array<ItemType>
    name: string
    sendMessage: (messageTest: string) => void
}


const Dialogs: React.FC<OwnPropsType> = (props) => {
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
    let addNewMessage = (values: NewMessageFormValuesType) => {
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

export type NewMessageFormValuesType = {
    newMessageText: string,

}

type NewMessageFormValuesTypeKeys = keyof NewMessageFormValuesType
type PropsType = {}

const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormValuesType, PropsType> & PropsType> = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>

                <Field component={Textarea} name={"newMessageText"}
                       placeholder={"Enter you text"} validate={[required, maxLengthCreator(50)]}/>
            </div>
            <div>
                <button>Send a message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux
    = reduxForm<NewMessageFormValuesType, PropsType>({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;