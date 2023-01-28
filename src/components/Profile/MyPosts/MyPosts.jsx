import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 14},
        {id: 2, message: 'Its my first post', likesCount: 28},
        {id: 3, message: 'test', likesCount: 32},
        {id: 4, message: 'blabla', likesCount: 1},
        {id: 5, message: 'sssss', likesCount: 0},
    ]

    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;