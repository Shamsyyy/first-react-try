import React from "react";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUserAC, unfollowAC} from "../../redux/usersReducer";
import Users from "./Users";



let mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
    }

};
let mapDispatchToProps = (dispatch) => {
    return{
        follow: (userId) => {
            dispatch(followAC(userId))
        },

        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },

        setUsers: (users) => {
            dispatch(setUserAC(users))
        },

        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },

        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }

    }
};
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;