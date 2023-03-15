import React from "react";
import classes from "./ProfileInfo.module.css"
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/image/user.png";
const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}
                     className={classes.userPhoto} />

                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                <div className={classes.description}>
                    <div className={classes.itemDescriprion}>{props.profile.aboutMe}</div>
                    <div className={classes.itemDescriprion}>Мое полное имя: {props.profile.fullName}</div>
                    <div className={classes.itemDescriprion}>Мои контакты:
                        <ul>
                            <li>Facebook: {props.profile.contacts.facebook}</li>
                            <li>Website: {props.profile.contacts.website}</li>
                            <li>VK: {props.profile.contacts.vk}</li>
                            <li>Twitter: {props.profile.contacts.twitter}</li>
                            <li>Instagram: {props.profile.contacts.instagram}</li>
                            <li>Youtube: {props.profile.contacts.youtube}</li>
                            <li>Github: {props.profile.contacts.github}</li>
                            <li>MainLink: {props.profile.contacts.mainLink}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;