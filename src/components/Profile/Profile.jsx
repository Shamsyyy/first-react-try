import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src='https://freefrontend.com/assets/img/css-headers-footers/Sexy-Animated-Rainbow-Waves-Header.png' alt='s'/>
            </div>
            <div>
                ava + dissk
            </div>
            <div>
                <MyPosts/>
            </div>
        </div>
    )
}

export default Profile;