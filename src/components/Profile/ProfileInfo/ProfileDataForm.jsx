import React from "react";
import classes from "./ProfileInfo.module.scss"
import styles from "../../Common/FormsControls/FormsControls.module.css";
import {createField, Input, Textarea} from "../../Common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

const ProfileDataForm = ({handleSubmit, ...props}) => {
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
                        {createField("Full name", "fullName", [], Input)}
                    </div>
                    <div>
                        Looking for a job:
                        {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
                    </div>
                    <div>
                        My professional skills:
                        {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
                    </div>
                    <div>
                        About me:
                        { createField("About me", "aboutMe", [], Textarea  )}
                    </div>
                </div>
                <div className={classes.itemDescriprion}>
                       Мои контакты: {Object.keys(props.profile.contacts).map(key => {
                        return (
                            <div key={key} className={classes.contact}>
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

const ProfileDataFormReduxForm = reduxForm({
    form: "edit-profile",
    enableReinitialize: true,
    destroyOnUnmount: false
})(ProfileDataForm);

export default ProfileDataFormReduxForm;