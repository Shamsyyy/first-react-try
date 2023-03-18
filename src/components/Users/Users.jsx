import React from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

let Users = ({totalUsersCount, pageSize, onPageChanged, currentPage, users, ...props}) => {
    return (
        <div>
            <Paginator  totalItemsCount={totalUsersCount} pageSize={pageSize}
                       onPageChanged={onPageChanged} currentPage={currentPage}/>
            <div>
                {
                    users.map(u => <User user={u} key={u.id}
                                         followingInProgress={props.followingInProgress}
                                         unfollow={props.unfollow} follow={props.follow}/>
                    )
                }
            </div>
        </div>
    )
}
export default Users;