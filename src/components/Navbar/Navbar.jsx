import React from "react";
import classes from "./Navbar.module.css";
const Navbar = () => {
    return (
        <div className={classes.nav}>
            <div className={`${classes.item} ${classes.active}`}>
                <a href="/profile">Profile</a>
            </div>
            <div className={classes.item}>
                <a href="/dialogs">Messages</a>
            </div>
            <div className={classes.item}>
                <a href="/News">News</a>
            </div>
            <div className={classes.item}>
                <a href="/Music">Music</a>
            </div>
            <div className={classes.item}>
                <a href="/Settings">Settings</a>
            </div>
        </div>
    )
}

export default Navbar;