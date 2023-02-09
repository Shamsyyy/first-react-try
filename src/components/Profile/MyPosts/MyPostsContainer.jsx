import React from "react";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = (props) => {
    // let state = props.store.getState();
    //
    // let addPost = () => {
    //     props.store.dispatch(addPostCreator());
    // }
    //
    // let onPostChange = (text) => {
    //     props.store.dispatch(updateNewPostTextCreator(text));
    // }

    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostCreator());
                }

                let onPostChange = (text) => {
                    store.dispatch(updateNewPostTextCreator(text));
                }

                return <MyPosts updateNewPostText={onPostChange}
                                addPost={addPost}
                                posts={state.profileReducer.posts}
                                newPostText={state.profileReducer.newPostText}/>
            }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;