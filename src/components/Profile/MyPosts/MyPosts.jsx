import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";
//test
const MyPosts = React.memo(props => {
    console.log("renderer")
    let postsElements =
        props.posts.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount}/>)

    let addNewPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <AddPostFormRedux onSubmit={addNewPost}/>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
});

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field component={Textarea} placeholder={"Enter you text"}
                           name={"newPostText"} validate={[ maxLengthCreator(300)]}/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: "profileAddPostForm"})(AddPostForm)

export default MyPosts;