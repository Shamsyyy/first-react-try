import {profileAPI, usersAPI} from "../API/api";
import {stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../types/types";

const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';



let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 14},
        {id: 2, message: 'Its my first post', likesCount: 28},
        {id: 3, message: 'test', likesCount: 32},
        {id: 4, message: 'blabla', likesCount: 1},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: "",
    newPostText: ""
}

export type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        /*        case UPDATE_NEW_POST_TEXT:
                    return {
                        ...state,
                        newPostText: action.newText
                    }*/
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos,} as ProfileType
            }
        default:
            return state;

    }
}
type addPostCreatorActionType = {
    type: typeof ADD_POST,
    newPostText: string
}
export const addPostCreator = (newPostText: string): addPostCreatorActionType => ({type: ADD_POST, newPostText})
/*export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})*/
type setUserProfileActionType = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): setUserProfileActionType => ({type: SET_USER_PROFILE, profile})
type setStatusActionType = {
    type: typeof SET_STATUS,
    status: string
}
export const setStatus = (status: string): setStatusActionType => ({type: SET_STATUS, status})
type deletePostActionType = {
    type: typeof DELETE_POST,
    postId: number
}
export const deletePost = (postId: number): deletePostActionType => ({type: DELETE_POST, postId})
type savePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS,
    photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): savePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getUserProfile = (userId: number) => async (dispatch: any) => {
    let data = await usersAPI.getProfile(userId) //get API
    dispatch(setUserProfile(data))
}
export const getStatus = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId)
    if (response !== null && response !== undefined) {
        dispatch(setStatus(response.data))
    }
}
export const updateStatus = (status: string) => async (dispatch: any) => {
    try {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    } catch(error) {
        alert("Error")
    }
}
export const savePhoto = (file: any) => async (dispatch: any) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}
export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().authReducer.id
    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0])
    }
}

export default profileReducer;