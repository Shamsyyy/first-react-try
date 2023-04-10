import React from "react";
import preloader from "../../../assets/image/preloader.svg";
import classes from "./Preloader.module.scss"

let Preloader = (props) => {
    return (
        <div className={classes.preloader}>
            <div className={classes.ldsRoller}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
export default Preloader;