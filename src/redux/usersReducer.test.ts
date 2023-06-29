import { updateObjectInArray } from "../utils/objectsHelpers";
import usersReducer, {
    actions,
    requestUsers
} from "./usersReducer";
import {UserType} from "../types/types";
import {profileAPI} from "../API/profileAPI";

//Mock data for testing
const initialState = {
    users: [
        { id: 1, followed: false, name: 'User 1', status: 'status 1', },
        { id: 2, followed: true, name: 'User 2', status: 'status 2', },
        { id: 3, followed: false, name: 'User 3', status: 'status 3', },
        { id: 4, followed: true, name: 'User 4', status: 'status 4', },
    ] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

// Handle FOLLOW action
it('should handle FOLLOW', () => {
  // set userId to 1
  const userId = 1;
  // set newState to usersReducer with initialState and followSuccess with userId
  const newState = usersReducer(initialState, actions.followSuccess(userId));
  // expect newState.users[0].followed to be true
  expect(newState.users[0].followed).toBe(true);
});
// Handle UNFOLLOW action
it('should handle UNFOLLOW', () => {
  // set userId to 2
  const userId = 2;
  // set newState to usersReducer with initialState and unfollowSuccess with userId
  const newState = usersReducer(initialState, actions.unfollowSuccess(userId));
  // expect newState.users[1].followed to be false
  expect(newState.users[1].followed).toBe(false);
});

// Handle SET_CURRENT_PAGE action
it('should handle SET_CURRENT_PAGE', () => {
  // set currentPage to 3
  const currentPage = 3;
  // set newState to usersReducer with initialState and setCurrentPage with currentPage
  const newState = usersReducer(initialState, actions.setCurrentPage(currentPage));
  // expect newState.currentPage to be currentPage
  expect(newState.currentPage).toBe(currentPage);
});
// Handle SET_TOTAL_USERS_COUNT action
it('should handle SET_TOTAL_USERS_COUNT', () => {
  // set totalCount to 100
  const totalCount = 100;
  // set newState to usersReducer with initialState and setTotalUsersCount with totalCount
  const newState = usersReducer(initialState, actions.setTotalUsersCount(totalCount));
  // expect newState.totalUsersCount to be totalCount
  expect(newState.totalUsersCount).toBe(totalCount);
});
// Handle TOGGLE_IS_FETCHING action
it('should handle TOGGLE_IS_FETCHING', () => {
  // set isFetching to true
  const isFetching = true;
  // set newState to usersReducer with initialState and toggleIsFetching with isFetching
  const newState = usersReducer(initialState, actions.toggleIsFetching(isFetching));
  // expect newState.isFetching to be isFetching
  expect(newState.isFetching).toBe(isFetching);
});
// Handle TOGGLE_IS_FOLLOWING_PROGRESS action
it('should handle TOGGLE_IS_FOLLOWING_PROGRESS', () => {
  // set userId to 2
  const userId = 2;
  // set isFetching to true
  const isFetching = true;
  // set newState to usersReducer with initialState and toggleFollowingProgress with isFetching and userId
  const newState = usersReducer(initialState, actions.toggleFollowingProgress(isFetching, userId));
  // expect newState.followingInProgress[0] to be userId
  expect(newState.followingInProgress[0]).toBe(userId);
});
// Handle requestUsers thunk

    //HELPER FUNCTION TEST
    describe('updateObjectInArray helper function', () => {
        it('should update an object in an array', () => {
            const originalArray = [{ id: 1, name: 'User 1' }, { id: 2, name: 'User 2' }];
            const key = 'id';
            const newObj = { name: 'User New' };
            const expectedArray = [{ id: 1, name: 'User 1' }, { id: 2, name: 'User New' }];
            const newArray = updateObjectInArray(originalArray, 2, key, newObj);
            expect(newArray).toEqual(expectedArray);
        });
    });
