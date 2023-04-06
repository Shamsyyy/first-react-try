import React, {useEffect, useState} from "react";
import classes from "./ProfileInfo.module.scss";

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);      //HOOKS
    let [status, setStatus] = useState(props.status);            //HOOKS

    useEffect(() => {                                      //HOOKS
            setStatus(props.status)
    }, [props.status])

    const  activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode (false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }
    let clue = "Double click to change status"
        return (
            <div>

                {!editMode &&
                    <div> <span>Status: </span>
                            <span data-hint={clue} className={classes.tooltip} onDoubleClick={activateEditMode}>
                                {props.status || "non status"}
                            </span>
                    </div>
                }
                {editMode &&
                    <div>
                        <input onChange={onStatusChange} onBlur={deactivateEditMode}
                               autoFocus={true} value={status}/>
                    </div>
                }

            </div>
        )
    }


export default ProfileStatusWithHooks;