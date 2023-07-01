import React from "react";
import classes from "./ProfileInfo.module.scss"
import styles from "../../Common/FormsControls/FormsControls.module.css";
import {createField, GetStringKeys, Input, Textarea} from "../../Common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import {ProfileType} from "../../../types/types";
import {LoginFormValuesType} from "../../Login/Login";

type PropsType = {
    profile: ProfileType
}
type ProfileTypeKeys = GetStringKeys<ProfileType>

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({handleSubmit, ...props}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={classes.buttonEdit}>
                <button>save</button>
            </div>
            {props.error &&
                <div
                    className={styles.formSummaryError}>
                    {props.error}
                </div>
            }
            <div className={classes.description}>
                <div className={classes.itemDescriprion}>
                    <div>
                        Мое полное имя:
                        {createField<ProfileTypeKeys>("Full name", "fullName", [], Input)}
                    </div>
                    <div>
                        Looking for a job:
                        {createField<ProfileTypeKeys>("", "lookingForAJob", [], Input, {type: "checkbox"})}
                    </div>
                    <div>
                        My professional skills:
                        {createField<ProfileTypeKeys>("My professional skills", "lookingForAJobDescription", [], Textarea)}
                    </div>
                    <div>
                        About me:
                        { createField<ProfileTypeKeys>("About me", "aboutMe", [], Textarea  )}
                    </div>
                </div>
                <div className={classes.itemDescriprion}>
                       Мои контакты: {Object.keys(props.profile.contacts).map(key => {
                        return (
                            <div key={key} className={classes.contact}>
                                { /* todo: create some solution for embedded objects */ }
                                {key}: {createField(key, "contacts." + key, [], Input)}
                            </div>
                        )
                    }
                    )}
                </div>
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>({
    form: "edit-profile",
    enableReinitialize: true,
    destroyOnUnmount: false
})(ProfileDataForm);

export default ProfileDataFormReduxForm;