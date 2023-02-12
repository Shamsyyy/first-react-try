import React from "react";
import {connect} from "react-redux";
import {followAC, setUserAC, unfollowAC} from "../../redux/usersReducer";
import Users from "./Users";



let mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users
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
        }

    }
};
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;