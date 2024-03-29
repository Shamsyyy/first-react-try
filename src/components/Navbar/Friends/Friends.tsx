import React from "react";
import classes from "./Friends.module.css";
import Friend from "./Friend/Friend";

export type FriendsPropsType = {
    friends: Array<{
        name: string,
        id: number,
        src: string }>
}

const Friends: React.FC<FriendsPropsType> = (props) => {

    let friendsElements =
        props.friends.map(f => <Friend name={f.name} src={f.src} key={f.id} id={f.id}/>);

    return (
        <div className={classes.item}>
            {friendsElements}
        </div>
    )
}

export default Friends;