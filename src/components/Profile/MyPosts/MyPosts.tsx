import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";
import {createField, GetStringKeys, Input, Textarea} from "../../Common/FormsControls/FormsControls";

import {PostType} from "../../../types/types";


export type MapPropsType= {
    posts: Array<PostType>
}
export type DispatchPropsType= {
    addPost: (newPostText: string) => void
}

type PropsType = MapPropsType & DispatchPropsType

export type AddPostFormValuesType = {
    newPostText: string
}

type AddPostFormValuesTypeKeys = GetStringKeys<AddPostFormValuesType>

const MyPosts: React.FC<PropsType> = React.memo(props => {
    console.log("renderer")
    let postsElements =
        props.posts.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount}/>)

    let addNewPost = (values: AddPostFormValuesType) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <AddPostFormRedux posts={props.posts}  addPost={props.addPost}  onSubmit={addNewPost}/>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
});

const AddPostForm: React.FC<InjectedFormProps<AddPostFormValuesType, PropsType> & PropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    {createField<AddPostFormValuesTypeKeys>("Enter you text", "newPostText",
                        [required,maxLengthCreator(300)], Textarea)}

                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm<AddPostFormValuesType, PropsType>({form: "profileAddPostForm"})(AddPostForm)

export default MyPosts;