import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {FilterType, follow, requestUsers, unfollow} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {
    getUsers,
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsersFilter,
} from "../../redux/usersSelectors";
import {UserType} from "../../types/types";
import {AppStateType} from "../../redux/reduxStore";
import {actions} from "../../redux/usersReducer";

type MapStatePropsType = {
    currentPage: number,
    pageSize: number,
    isFetching: boolean,
    totalUsersCount: number,
    users: Array<UserType>,
    followingInProgress: Array<number>,
    filter: FilterType
}
type MapDispatchPropsType = {
    getUsers: (currentPage: number, pageSize: number, filter: FilterType) => void,
    unfollow: (userId: number) => void,
    follow: (userId: number) => void,
    setCurrentPage: (currentPage: number) => void,
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void,

}
type OwnPropsType = {
    pageTitle: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

const UsersContainer: React.FC<PropsType> = (props) => {
    const {currentPage, pageSize, filter} = props;

    useEffect(() => {
        props.getUsers(currentPage, pageSize, filter); //thunk
    }, [currentPage, pageSize, filter.term]);

    const onPageChanged = (currentPage: number) => {
        props.getUsers(currentPage, pageSize, filter); //thunk
    };

    const onFilterChanged = (filter: FilterType) => {
        props.getUsers(1, pageSize, filter)
    }

    return (
        <div>
            {props.isFetching ?
                <Preloader/>
                : <Users
                    totalUsersCount={props.totalUsersCount}
                    pageSize={props.pageSize}
                    currentPage={props.currentPage}
                    onPageChanged={onPageChanged}
                    onFilterChanged={onFilterChanged}
                    users={props.users}
                    follow={props.follow}
                    unfollow={props.unfollow}
                    followingInProgress={props.followingInProgress}
                />}

        </div>
    )
}


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        filter: getUsersFilter(state)
    }
};

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
    (mapStateToProps, {
        follow, unfollow, setCurrentPage: actions.setCurrentPage,
        toggleFollowingProgress: actions.toggleFollowingProgress, getUsers: requestUsers
    })
)(UsersContainer);
