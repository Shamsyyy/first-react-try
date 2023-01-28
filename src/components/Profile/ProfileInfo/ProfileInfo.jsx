import React from "react";
import classes from "./ProfileInfo.module.css"
const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://freefrontend.com/assets/img/css-headers-footers/Sexy-Animated-Rainbow-Waves-Header.png' alt='s'/>
            </div>
            <div className={classes.discriptionBlock}>
                ava + dissk
            </div>
        </div>
    )
}

export default ProfileInfo;