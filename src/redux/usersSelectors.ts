import {AppStateType} from "./reduxStore";

export const getUsers = (state: AppStateType) => {
    return state.usersReducer.users;
}
export const getPageSize = (state: AppStateType) => {
    return state.usersReducer.pageSize;
}
export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersReducer.totalUsersCount;
}
export const getCurrentPage = (state: AppStateType) => {
    return state.usersReducer.currentPage;
}
export const getIsFetching = (state: AppStateType) => {
    return state.usersReducer.isFetching;
}
export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersReducer.followingInProgress;
}
export const getUsersFilter = (state: AppStateType) => {
    return state.usersReducer.filter;
}

