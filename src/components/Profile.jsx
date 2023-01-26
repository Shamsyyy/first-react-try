import React from "react";
import classes from './Profile.module.css'
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
                My post
                <div className={classes.posts}>New post</div>
                <div className={classes.item}>post 1</div>
                <div className={classes.item}>post 2</div>
            </div>
        </div>
    )
}

export default Profile;