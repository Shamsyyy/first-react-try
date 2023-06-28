import {usersAPI} from "../API/api";
import {updateObjectInArray} from "../utils/objectsHelpers";
import {UserType} from "../types/types";
import {AppStateType, InferActionsType} from "./reduxStore";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";



let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number> // array of users ids

}
type initialStateType = typeof initialState

const usersReducer = (state = initialState, action: ActionsTypes): initialStateType => {

    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId,
                    "id", {followed: true})
            }

        case "UNFOLLOW":
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId,
                    "id", {followed: false})
            }
        case "SET_USERS":
            return {
                ...state,
                users: action.users
            }
        case "SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.currentPage
            }
        case "SET_TOTAL_USERS_COUNT":
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case "TOGGLE_IS_FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }
        case "TOGGLE_IS_FOLLOWING_PROGRESS":
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;

    }
}


//ACTIONS CREATE

export const actions = {
    followSuccess:(userId: number) => ({type: 'FOLLOW', userId} as const),

    unfollowSuccess:(userId: number)=> ({type: 'UNFOLLOW', userId} as const),

    setUsers:(users: Array<UserType>) => ({type: 'SET_USERS', users} as const),

    setCurrentPage:(currentPage: number)=> ({type: 'SET_CURRENT_PAGE', currentPage} as const),

    setTotalUsersCount:(totalCount: number)=> ({type: 'SET_TOTAL_USERS_COUNT', totalCount} as const),

    toggleIsFetching:(isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching} as const),

    toggleFollowingProgress:(isFetching: boolean, userId: number) => ({
        type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
        isFetching,
        userId
    } as const)
}

type ActionsTypes = InferActionsType<typeof actions>

//THUNK CREATE

// type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const requestUsers = (page: number, pageSize: number): ThunkType => {

    return async (dispatch, getState ) => {

        dispatch(actions.toggleIsFetching(true))
        dispatch(actions.setCurrentPage(page))

        let data = await usersAPI.getUsers(page, pageSize) //get API

        dispatch(actions.toggleIsFetching(false))
        dispatch(actions.setUsers(data.items))
        dispatch(actions.setTotalUsersCount(data.totalCount))
    }
}

const _followUnfollowFlow = async (dispatch: DispatchType,
                                   userId: number, apiMethod: any,
                                   actionCreator: (userId: number) => ActionsTypes ) => {
    dispatch(actions.toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId)

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(actions.toggleFollowingProgress(false, userId));
}

export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        _followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), actions.followSuccess);

    }
}
export const unfollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        _followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), actions.unfollowSuccess);
    }
}

export default usersReducer;