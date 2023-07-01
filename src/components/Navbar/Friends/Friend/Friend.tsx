import React from "react";
import classes from "./Friend.module.css";

const Friend: React.FC<any> = (props) => {
    return (
        <div className={classes.item}>
            <img
                src={props.src}/>
                <a><span>{props.name}</span></a>
        </div>
    )
}

export default Friend;