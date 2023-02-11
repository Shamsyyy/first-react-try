const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {id: 1, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/No_avatar.png', followed: false, fullName: 'Daur', status: 'im learning react', location: {city: 'SPB', country: 'Russia'}},
        {id: 2, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/No_avatar.png', followed: true, fullName: 'Diana', status: 'im learning swift', location: {city: 'Kazan', country: 'Russia'}},
        {id: 3, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/No_avatar.png', followed: false, fullName: 'Dmitry', status: 'Yoyoyo', location: {city: 'Minsk', country: 'Belarus'}}
    ]
}
const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return  {
                ...state,
                users: state.users.map ( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return  {
                ...state,
                users: state.users.map ( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [ ...state.users, ...action.users ]
            }
        default:
            return state;

    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUserAC = (users) => ({ type: SET_USERS, users })


export default usersReducer;