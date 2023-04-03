import React from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";
import classes from "./Users.module.css"

let Users = ({totalUsersCount, pageSize, onPageChanged, currentPage, users, ...props}) => {
    return (
        <div>
            <div className={classes.paginator}>
                <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize}
                           onPageChanged={onPageChanged} currentPage={currentPage}/>
            </div>
            <div>
                {
                    users.map(u => <User user={u} key={u.id}
                                         followingInProgress={props.followingInProgress}
                                         unfollow={props.unfollow} follow={props.follow}/>
                    )
                }
            </div>
            <div className={classes.paginator}>
                <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize}
                           onPageChanged={onPageChanged} currentPage={currentPage}/>
            </div>
        </div>
    )
}
export default Users;