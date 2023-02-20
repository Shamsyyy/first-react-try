import axios from "axios";


const instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "1e4e1ee5-d9db-4ee1-bf3a-1f37f9c9664d"
    }
});


export const usersAPI = {
    getUsers(currentPage, pageSize){
        return  instanse
            .get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    unfollow(userId){
        return  instanse
            .delete(`follow/${userId}`);
    },
    follow(userId){
        return  instanse
            .post(`follow/${userId}`);
    },
    getProfile(userId){
        return  instanse
            .get(`profile/${userId}`).then(response => response.data);
    },
    getProfileStatus(userId){
        return  instanse
            .get(`profile/status/${userId}`).then(response => response.data);
    }
}


export const authAPI = {
    loginMe(){
        return  instanse
            .get(`auth/me`).then(response => response.data);
    }
}