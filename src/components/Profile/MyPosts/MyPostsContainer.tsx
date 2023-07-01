import React from "react";
import {actions} from "../../../redux/profileReducer";
import MyPosts, {DispatchPropsType, MapPropsType} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/reduxStore";



let mapStateToProps = (state: AppStateType): MapPropsType  => {
    return {
        posts: state.profileReducer.posts,
    }
}


const MyPostsContainer = connect<MapPropsType, DispatchPropsType, {}, AppStateType>
(mapStateToProps, {addPost: actions.addPostCreator})(MyPosts)

export default MyPostsContainer;