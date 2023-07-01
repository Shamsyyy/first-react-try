import React from "react";

import classes from "./Preloader.module.scss"

let Preloader: React.FC = () => {
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