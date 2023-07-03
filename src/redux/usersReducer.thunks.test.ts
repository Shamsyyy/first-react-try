import {actions, follow, unfollow} from "./usersReducer";
import {usersAPI} from "../API/usersAPI";
import {APIResponseType, ResultCodesEnum} from "../API/api";

jest.mock("../API/usersAPI")
const usersAPIMock = usersAPI as jest.Mocked<typeof usersAPI>

const dispatchMock= jest.fn();
const getStateMock= jest.fn();
beforeEach(() => {
    dispatchMock.mockClear();
    getStateMock.mockClear();
    usersAPIMock.follow.mockClear();
    usersAPIMock.unfollow.mockClear();
})

const result: APIResponseType = {
    resultCode: ResultCodesEnum.Success,
    messages: [],
    data: []
}


test ("Success follow thunk", async () => {
    usersAPIMock.follow.mockReturnValue(Promise.resolve(result))
    const thunk = follow(1)
    await thunk(dispatchMock, getStateMock, {})


    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingProgress(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.followSuccess(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingProgress(false, 1))
})
test ("Success unfollow thunk", async () => {
    usersAPIMock.unfollow.mockReturnValue(Promise.resolve(result))
    const thunk = unfollow(1)
    await thunk(dispatchMock, getStateMock, {})


    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingProgress(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.unfollowSuccess(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingProgress(false, 1))
})