import React, {ChangeEvent, useEffect, useState} from "react";
import classes from "./ProfileInfo.module.scss";

type PropsType = {
    status: string,
    updateStatus: (status: string) => void
    isOwner: boolean
}

const ProfileStatusWithHooks: React.FC<PropsType> = (props) => {
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

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }
    let clue = "Double click to change status"
        return (
            <div>

                {!editMode &&
                    <div> <span>Status: </span>
                            <span data-hint={props.isOwner ? clue : undefined}
                                  className={classes.status}
                                  onDoubleClick={props.isOwner ? activateEditMode : undefined}>
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