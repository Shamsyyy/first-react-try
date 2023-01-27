import React from "react";
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <div className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" className = {props.activeFunc}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs" className = {props.activeFunc}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/News" className = {props.activeFunc}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/Music" className = {props.activeFunc}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/Settings" className = {props.activeFunc}>Settings</NavLink>
            </div>
        </div>
    )
}

export default Navbar;