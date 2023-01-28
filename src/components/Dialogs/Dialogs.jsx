import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let pathDialog = '/dialogs/' + props.id;
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={pathDialog}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return(
        <div className={classes.message}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name="Daur" id="1"/>
                <DialogItem name="Dimych" id="2"/>
                <DialogItem name="Sveta" id="3"/>
                <DialogItem name="Sasha" id="4"/>
                <DialogItem name="Misha" id="5"/>
                <DialogItem name="Pasha" id="6"/>
        </div>
    <div className={classes.messages}>
        <Message message="Hi"/>
        <Message message="How is your corse?"/>
        <Message message="Yo"/>
    </div>
</div>
)
}

export default Dialogs;