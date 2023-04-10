import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {follow, requestUsers, setCurrentPage, toggleFollowingProgress, unfollow,} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {
    getUsers,
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
} from "../../redux/usersSelectors";

const UsersContainer = (props) => {
    const {currentPage, pageSize} = props;

    useEffect(() => {
        props.getUsers(currentPage, pageSize); //thunk
    }, [currentPage, pageSize]);

    const onPageChanged = (currentPage) => {
        props.getUsers(currentPage, pageSize); //thunk
    };
    return (
        <div>
            {props.isFetching ?
                <Preloader/>
                : <Users
                    totalUsersCount={props.totalUsersCount}
                    pageSize={props.pageSize}
                    currentPage={props.currentPage}
                    onPageChanged={onPageChanged}
                    users={props.users}
                    follow={props.follow}
                    unfollow={props.unfollow}
                    followingInProgress={props.followingInProgress}
                />}

        </div>
    )
}


let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};

export default compose(
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage,
        toggleFollowingProgress, getUsers: requestUsers
    }))(UsersContainer)
