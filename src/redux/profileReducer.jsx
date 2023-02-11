const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 14},
        {id: 2, message: 'Its my first post', likesCount: 28},
        {id: 3, message: 'test', likesCount: 32},
        {id: 4, message: 'blabla', likesCount: 1},
    ],
    newPostText: 'test post'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        /*            stateCopy.posts = [...state.posts];
stateCopy.posts.push(newPost)
stateCopy.newPostText = '';*/

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        // stateCopy.newPostText = action.newText;
        default:
            return state;

    }
}

export const addPostCreator = () => ({type: ADD_POST})
export const updateNewPostTextCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})

export default profileReducer;