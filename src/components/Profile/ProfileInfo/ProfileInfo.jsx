import React, {useState} from "react";
import classes from "./ProfileInfo.module.scss"
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/image/user.png";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    return (
        <div className={classes.parent}>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}
                     className={classes.userPhoto}/>
                <div className={classes.btn}>
                    {props.isOwner && <label> Загрузить фотографию
                        <input className={classes.customInputFile} type={"file"} onChange={onMainPhotoSelected}/>
                    </label>}
                </div >
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                <div className={classes.profileInfo}>
                    {editMode
                        ? <ProfileDataForm profile={props.profile} initialValues={props.profile} onSubmit={onSubmit}/>
                        : <ProfileData goToEditMode={() => {
                            setEditMode(true)
                        }} profile={props.profile} isOwner={props.isOwner}/>}
                </div>


            </div>
        </div>
    )
}

const ProfileData = (props) => {
    return (
        <div>
            <div className={classes.buttonEdit}>
                {props.isOwner && <div>
                    <button onClick={props.goToEditMode}>edit</button>
                </div>}
            </div>
            <div className={classes.description}>
                <div className={classes.itemDescriprion}>
                    <div>Мое полное имя: {props.profile.fullName}</div>
                    <div> Looking for a job: {props.profile.lookingForAJob ? "yes" : "no"}</div>
                    {props.profile.lookingForAJob ?
                        <div> My professional skills: {props.profile.lookingForAJobDescription}</div> : null}
                    <div> About me: {props.profile.aboutMe}</div>
                </div>
                <div className={classes.itemDescriprion}>
                    Мои контакты: {Object.keys(props.profile.contacts).map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
                    }
                )}
                </div>
            </div>
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return (
        contactValue && <div className={classes.contact}>{contactTitle} : {contactValue}</div>
    )
}
export default ProfileInfo;