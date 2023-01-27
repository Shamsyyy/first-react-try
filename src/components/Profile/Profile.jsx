import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img
                    src='https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg' alt='s'/>
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