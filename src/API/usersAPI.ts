import {GetItemsType, instance} from "./api";


export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance
            .get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    unfollow(userId: number) {
        return instance
            .delete<ResponseType>(`follow/${userId}`);
    },
    follow(userId: number) {
        return instance
            .post<ResponseType>(`follow/${userId}`);
    }
}