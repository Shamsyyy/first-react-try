import React from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";
import classes from "./Users.module.css"
import {UserType} from "../../types/types";
import {UsersSearchForm} from "./UsersSearchForm";
import {FilterType} from "../../redux/usersReducer";

type PropsType = {
    totalUsersCount: number,
    pageSize: number,
    onPageChanged: (pageNumber: number) => void,
    onFilterChanged: (filter: FilterType) => void,
    currentPage: number,
    users: Array<UserType>
    followingInProgress: Array<number>,
    unfollow: (userId: number) => void,
    follow: (userId: number) => void
}

let Users: React.FC<PropsType> = ({totalUsersCount, pageSize, onPageChanged, currentPage, users,
                                      ...props}) => {
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
                {/*todo: need fix classname and selected*/}
                <UsersSearchForm  onFilterChanged={props.onFilterChanged}/>
                <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize}
                           onPageChanged={onPageChanged} currentPage={currentPage}/>

            </div>
        </div>
    )
}


export default Users;