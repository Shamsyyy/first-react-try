import React from "react";
import classes from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>
                    Dimych
                </div>
                <div className={classes.dialog + ' ' + classes.active}>
                    Daur
                </div>
                <div className={classes.dialog}>
                    Sveta
                </div>
                <div className={classes.dialog}>
                    Misha
                </div>
                <div className={classes.dialog}>

                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>
                    Hi
                </div>
                <div className={classes.message}>
                    Hove is your course?
                </div>
                <div className={classes.message}>
                    You
                </div>
            </div>
        </div>
    )
}

export default Dialogs;