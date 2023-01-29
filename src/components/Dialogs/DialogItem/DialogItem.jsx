import React from "react";
import classes from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let pathDialog = '/dialogs/' + props.id;
    return (
        <div className={classes.dialog}>
            <NavLink to={pathDialog}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem;