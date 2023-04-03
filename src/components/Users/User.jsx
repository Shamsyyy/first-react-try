import React from "react";
import classes from "./Users.module.css"
import userPhoto from "../../assets/image/user.png"
import {NavLink} from "react-router-dom";
import styles from "./User.module.css"
let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div>
                    <div className={styles.itemProfile}>
                        <div className={styles.photoProfile}>
                            <NavLink to={"/profile/" + user.id}>
                                <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                     className={classes.userPhoto}/>
                            </NavLink>
                        </div>
                        <div className={styles.button}>
                        {user.followed
                            ? <button disabled={followingInProgress
                                .some(id => id === user.id)}
                                      onClick={() => {
                                          unfollow(user.id)
                                      }}>
                                Unfollow</button>
                            : <button disabled={followingInProgress
                                .some(id => id === user.id)}
                                      onClick={() => {
                                          follow(user.id)
                                      }}>
                                Follow</button>}

                        </div>
                        <div className={styles.infoProfile}>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                            <div>{user.id}</div>
                        </div>
                    </div>
        </div>
    )
}

export default User;