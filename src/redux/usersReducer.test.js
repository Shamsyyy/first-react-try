import { usersAPI } from "../API/api";
import { updateObjectInArray } from "../utils/objectsHelpers";
import usersReducer, {
    followSuccess,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress,
    unfollowSuccess,
    requestUsers
} from "./usersReducer";

//Mock data for testing
const initialState = {
    users: [
        { id: 1, followed: false, name: 'User 1', status: 'status 1', },
        { id: 2, followed: true, name: 'User 2', status: 'status 2', },
        { id: 3, followed: false, name: 'User 3', status: 'status 3', },
        { id: 4, followed: true, name: 'User 4', status: 'status 4', },
    ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

// Initial state should return the initial state
it('should return the initial state', () => {
  // expect initial state to equal initialState
  expect(usersReducer(initialState, {})).toEqual(initialState);
});
// Handle FOLLOW action
it('should handle FOLLOW', () => {
  // set userId to 1
  const userId = 1;
  // set newState to usersReducer with initialState and followSuccess with userId
  const newState = usersReducer(initialState, followSuccess(userId));
  // expect newState.users[0].followed to be true
  expect(newState.users[0].followed).toBe(true);
});
// Handle UNFOLLOW action
it('should handle UNFOLLOW', () => {
  // set userId to 2
  const userId = 2;
  // set newState to usersReducer with initialState and unfollowSuccess with userId
  const newState = usersReducer(initialState, unfollowSuccess(userId));
  // expect newState.users[1].followed to be false
  expect(newState.users[1].followed).toBe(false);
});
// Handle SET_USERS action
it('should handle SET_USERS', () => {
  // set newUsers to an array of objects
  const newUsers = [
    { id: 5, followed: false, name: 'User 5', status: 'status 5', },
    { id: 6, followed: true, name: 'User 6', status: 'status 6', },
  ];
  // set newState to usersReducer with initialState and setUsers with newUsers
  const newState = usersReducer(initialState, setUsers(newUsers));
  // expect newState.users length to be 2
  expect(newState.users.length).toBe(2);
});
// Handle SET_CURRENT_PAGE action
it('should handle SET_CURRENT_PAGE', () => {
  // set currentPage to 3
  const currentPage = 3;
  // set newState to usersReducer with initialState and setCurrentPage with currentPage
  const newState = usersReducer(initialState, setCurrentPage(currentPage));
  // expect newState.currentPage to be currentPage
  expect(newState.currentPage).toBe(currentPage);
});
// Handle SET_TOTAL_USERS_COUNT action
it('should handle SET_TOTAL_USERS_COUNT', () => {
  // set totalCount to 100
  const totalCount = 100;
  // set newState to usersReducer with initialState and setTotalUsersCount with totalCount
  const newState = usersReducer(initialState, setTotalUsersCount(totalCount));
  // expect newState.totalUsersCount to be totalCount
  expect(newState.totalUsersCount).toBe(totalCount);
});
// Handle TOGGLE_IS_FETCHING action
it('should handle TOGGLE_IS_FETCHING', () => {
  // set isFetching to true
  const isFetching = true;
  // set newState to usersReducer with initialState and toggleIsFetching with isFetching
  const newState = usersReducer(initialState, toggleIsFetching(isFetching));
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
  const newState = usersReducer(initialState, toggleFollowingProgress(isFetching, userId));
  // expect newState.followingInProgress[0] to be userId
  expect(newState.followingInProgress[0]).toBe(userId);
});
// Handle requestUsers thunk
describe('requestUsers thunk', () => {
  it('should dispatch SET_USERS and SET_TOTAL_USERS_COUNT', async () => {
    // set dispatchMock to jest.fn()
    const dispatchMock = jest.fn();
    // set getStateMock to jest.fn() with initialState
    const getStateMock = jest.fn(() => initialState);
    // set usersAPI.getUsers to jest.fn() with Promise.resolve with items and totalCount
    usersAPI.getUsers = jest.fn(() => Promise.resolve({ items: [], totalCount: 10 }));
    // await requestUsers with 1 and 10
    await requestUsers(1, 10)(dispatchMock, getStateMock, {});
    // expect dispatchMock to be called 5 times
    expect(dispatchMock).toBeCalledTimes(5);
    // expect dispatchMock to have been nth called with toggleIsFetching with true
    expect(dispatchMock).toHaveBeenNthCalledWith(1, toggleIsFetching(true));
    // expect dispatchMock to have been nth called with setCurrentPage with 1
    expect(dispatchMock).toHaveBeenNthCalledWith(2, setCurrentPage(1));
    // expect dispatchMock to have been nth called with toggleIsFetching with false
    expect(dispatchMock).toHaveBeenNthCalledWith(3, toggleIsFetching(false));
    // expect dispatchMock to have been nth called with setUsers with empty array
    expect(dispatchMock).toHaveBeenNthCalledWith(4, setUsers([]));
    // expect dispatchMock to have been nth called with setTotalUsersCount with 10
    expect(dispatchMock).toHaveBeenNthCalledWith(5, setTotalUsersCount(10));
  });
});

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
