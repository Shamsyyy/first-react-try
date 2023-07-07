import React from 'react';
import {useSelector} from "react-redux";
import {FilterType} from "../../redux/usersReducer";
import Preloader from "../Common/Preloader/Preloader";
import {getIsFetching,} from "../../redux/usersSelectors";
import {UserType} from "../../types/types";
import {Users} from "./Users";

/*type MapStatePropsType = {
    currentPage: number,
    pageSize: number,
    isFetching: boolean,
    totalUsersCount: number,
    users: Array<UserType>,
    followingInProgress: Array<number>,
    filter: FilterType
}
/*type MapDispatchPropsType = {
    getUsers: (currentPage: number, pageSize: number, filter: FilterType) => void,
    unfollow: (userId: number) => void,
    follow: (userId: number) => void,
    setCurrentPage: (currentPage: number) => void,
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void,
}
type OwnPropsType = {
    pageTitle: string
}

//type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType
*/
type UsersPagePropsType = {
    pageTitle: string
}

export const UsersPage: React.FC<UsersPagePropsType> = (props) => {
    const isFetching = useSelector(getIsFetching)
    return <>
        <h2>{props.pageTitle}</h2>
        {isFetching ? <Preloader/> : null}
        <Users />
    </>
}

/*
const UsersContainer: React.FC<PropsType> = (props) => {
    const {currentPage, pageSize, filter} = props;

    useEffect(() => {
        props.getUsers(currentPage, pageSize, filter); //thunk
    }, [currentPage, pageSize, filter.term]);

/!*    const onPageChanged = (currentPage: number) => {
        props.getUsers(currentPage, pageSize, filter); //thunk
    };
    const onFilterChanged = (filter: FilterType) => {
        props.getUsers(1, pageSize, filter)
    }*!/

    return (
        <div>
            {props.isFetching ?
                <Preloader/>
                : <Users
                    /!*totalUsersCount={props.totalUsersCount}
                    pageSize={props.pageSize}
                    currentPage={props.currentPage}
                    onPageChanged={onPageChanged}
                    onFilterChanged={onFilterChanged}
                    users={props.users}
                    followingInProgress={props.followingInProgress}
                    follow={props.follow}
                    unfollow={props.unfollow}*!/
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
*/
