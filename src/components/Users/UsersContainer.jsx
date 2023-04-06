import React from "react";
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

class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize) //thunk
    }

    onPageChanged = (currentPage) => {
        const {pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)  //thunk

    }

    render() {
        return (
            <>
                {this.props.isFetching ?
                    <Preloader/>
                    : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
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
    connect(mapStateToProps, {follow, unfollow, setCurrentPage,
        toggleFollowingProgress, getUsers: requestUsers}))(UsersContainer)
