import React from "react";
import classes from "./Navbar.module.css";
console.log(classes)
const Navbar = () => {
    return (
        <div className={classes.nav}>
            <div className={`${classes.item} ${classes.active}`}>
                <a>Profile</a>
            </div>
            <div className={classes.item}>
                <a >Messages</a>
            </div>
            <div className={classes.item}>
                <a >New</a>
            </div>
            <div className={classes.item}>
                <a>Music</a>
            </div>
            <div className={classes.item}>
                <a>Settings</a>
            </div>
        </div>
    )
}

export default Navbar;