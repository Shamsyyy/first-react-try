import usersReducer, {actions, initialState, initialStateType} from "./usersReducer";
import {UserType} from "../types/types";

let state: initialStateType;

beforeEach(() => {
        state = {
            users: [
                {id: 0, name: "Daur 0", followed: false, photos: {small: null, large: null}, status: "status 0"},
                {id: 1, name: "Daur 1", followed: false, photos: {small: null, large: null}, status: "status 1"},
                {id: 2, name: "Daur 2", followed: true, photos: {small: null, large: null}, status: "status 2"},
                {id: 3, name: "Daur 3", followed: true, photos: {small: null, large: null}, status: "status 3"},

            ],
            pageSize: 10,
            totalUsersCount: 0,
            currentPage: 1,
            isFetching: false,
            followingInProgress: [] as Array<number> // array of users ids}

        }
    }
)
test("Follow success", () => {

    const newState = usersReducer(state, actions.followSuccess(1))

    expect(newState.users[0].followed).toBeFalsy()
    expect(newState.users[1].followed).toBeTruthy()
})
test("Unfollow success", () => {

    const newState = usersReducer(state, actions.unfollowSuccess(3))

    expect(newState.users[2].followed).toBeTruthy()
    expect(newState.users[3].followed).toBeFalsy()
})
