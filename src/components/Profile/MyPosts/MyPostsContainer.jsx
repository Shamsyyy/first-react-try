import React from "react";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostCreator());
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextCreator(text));
    }

    return (
        <MyPosts updateNewPostText={onPostChange}
                 addPost={addPost}
                 posts={state.profileReducer.posts}
                 newPostText={state.profileReducer.newPostText}/>
    )
}

export default MyPostsContainer;