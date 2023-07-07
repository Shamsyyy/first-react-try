import React, {useEffect} from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";
import classes from "./Users.module.css"
import {} from "../../redux/usersReducer"
import {UsersSearchForm} from "./UsersSearchForm";
import {FilterType, requestUsers, follow, unfollow} from "../../redux/usersReducer";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers,
    getUsersFilter
} from "../../redux/usersSelectors";
import {AppDispatch} from "../../redux/reduxStore";

type PropsType = {
    //totalUsersCount: number,
    //pageSize: number,
    //onPageChanged: (pageNumber: number) => void,
    //onFilterChanged: (filter: FilterType) => void,
    //currentPage: number,
    //users: Array<UserType>
    //followingInProgress: Array<number>,
    //unfollow: (userId: number) => void,
    //follow: (userId: number) => void
}

export const Users: React.FC<PropsType> = (props) => {

    const users = useSelector(getUsers)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)
    const followingInProgress = useSelector(getFollowingInProgress)

    const dispatch: AppDispatch = useDispatch()

    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize, filter))
    }, [])

    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter))
    }
    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter))
    }
    const _follow = (userId: number) => {
        dispatch(follow(userId));
    }
    const _unfollow = (userId: number) => {
        dispatch(unfollow(userId));
    }

    return (
        <div>

            <div className={classes.paginator}>
                <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize}
                           onPageChanged={onPageChanged} currentPage={currentPage}/>
            </div>
            <div>
                {
                    users.map(u => <User
                                            user={u}
                                            key={u.id}
                                            followingInProgress={followingInProgress}
                                            unfollow={_unfollow}
                                            follow={_follow}/>
                    )
                }
            </div>
            <div className={classes.paginator}>
                {/*todo: need fix classname and selected*/}
                <UsersSearchForm  onFilterChanged={onFilterChanged}/>
                <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize}
                           onPageChanged={onPageChanged} currentPage={currentPage}/>

            </div>
        </div>
    )
}