import {APIResponseType, GetItemsType, instance} from "./api";


export const usersAPI = {
    getUsers(currentPage: number, pageSize: number, term: string = '', friend: null | boolean = null) {
        return instance
            .get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null ? '' : `&friend=${friend}`))
            .then(response => response.data);
    },
    unfollow(userId: number) {
        return instance
            .delete(`follow/${userId}`).then(res => res.data) as Promise<APIResponseType>;
    },
    follow(userId: number) {
        return instance
            .post(`follow/${userId}`).then(res => res.data) as Promise<APIResponseType>;
    }
}