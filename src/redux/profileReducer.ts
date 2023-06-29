import {FormAction, stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../types/types";
import {usersAPI} from "../API/usersAPI";
import {profileAPI} from "../API/profileAPI";
import {BaseThunkType, InferActionsType} from "./reduxStore";



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
type ActionsType = InferActionsType<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>

const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SN/PROFILE/ADD-POST":
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
        case "SN/PROFILE/SET_USER_PROFILE":
            return {
                ...state,
                profile: action.profile
            }
        case "SN/PROFILE/SET_STATUS":
            return {
                ...state,
                status: action.status
            }
        case "SN/PROFILE/DELETE_POST":
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        case "SN/PROFILE/SAVE_PHOTO_SUCCESS":
            return {
                ...state,
                profile: {...state.profile, photos: action.photos,} as ProfileType
            }
        default:
            return state;

    }
}

export const actions = {
    addPostCreator: (newPostText: string) => ({type: 'SN/PROFILE/ADD-POST', newPostText} as const),
    /*export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})*/
    setUserProfile: (profile: ProfileType | null) => ({type: 'SN/PROFILE/SET_USER_PROFILE', profile} as const),
    setStatus: (status: string)=> ({type: 'SN/PROFILE/SET_STATUS', status} as const),
    deletePost: (postId: number)=> ({type: 'SN/PROFILE/DELETE_POST', postId} as const),
    savePhotoSuccess: (photos: PhotosType) => ({type: 'SN/PROFILE/SAVE_PHOTO_SUCCESS', photos} as const)
}

export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getProfile(userId) //get API
    dispatch(actions.setUserProfile(data))
}
export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    if (response !== null && response !== undefined) {
        dispatch(actions.setStatus(response.data))
    }
}
export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    try {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(actions.setStatus(status));
        }
    } catch(error) {
        alert("Error")
    }
}
export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(actions.savePhotoSuccess(response.data.data.photos));
    }
}
export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().authReducer.id
    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        if (userId != null) {
            dispatch(getUserProfile(userId));
        } else {
            throw new Error("userId can't be null")
        }

    } else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0])
    }
}

export default profileReducer;