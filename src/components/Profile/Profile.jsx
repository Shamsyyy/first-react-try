import React from "react";
import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {updateStatus} from "../../redux/profileReducer";

const Profile = (props) => {

    return (
        <div className={classes.div}>
            <ProfileInfo profile={props.profile} isOwner={props.isOwner}
                         status={props.status} updateStatus={props.updateStatus}
                         savePhoto={props.savePhoto}/>
            <MyPostsContainer />
        </div>
    )
}
export default Profile;