import React from "react";
import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../types/types";
import {File} from "buffer";

type PropsType = {
    profile: ProfileType | null,
    status: string,
    updateStatus: (status: string) => void,
    isOwner: boolean,
    savePhoto: (file: File) => void,
    saveProfile: (profile: ProfileType) => Promise<any>
}
const Profile: React.FC<PropsType> = (props) => {

    return (
        <div className={classes.div}>
            <ProfileInfo profile={props.profile} isOwner={props.isOwner}
                         status={props.status} updateStatus={props.updateStatus}
                         savePhoto={props.savePhoto} saveProfile={props.saveProfile}/>
            <MyPostsContainer />
        </div>
    )
}
export default Profile;