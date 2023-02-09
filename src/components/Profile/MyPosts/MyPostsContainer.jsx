import React from "react";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

// const MyPostsContainer1 = (props) => {
//     // let state = props.store.getState();
//     //
//     // let addPost = () => {
//     //     props.store.dispatch(addPostCreator());
//     // }
//     //
//     // let onPostChange = (text) => {
//     //     props.store.dispatch(updateNewPostTextCreator(text));
//     // }
//
//     return (
//         <StoreContext.Consumer>
//             {store => {
//                 let state = store.getState();
//
//                 let addPost = () => {
//                     store.dispatch(addPostCreator());
//                 }
//
//                 let onPostChange = (text) => {
//                     store.dispatch(updateNewPostTextCreator(text));
//                 }
//
//                 return <MyPosts updateNewPostText={onPostChange}
//                                 addPost={addPost}
//                                 posts={state.profileReducer.posts}
//                                 newPostText={state.profileReducer.newPostText}/>
//             }
//             }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        posts: state.profileReducer.posts,
        newPostText: state.profileReducer.newPostText
    }

}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextCreator(text));
        },
        addPost: () => {
            dispatch(addPostCreator());
        }
    }

}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;