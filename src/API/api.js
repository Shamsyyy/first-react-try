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
    }
}

export const followedAPI = {
    unFollow(id){
        return  instanse
            .delete(`follow/${id}`, {}).then(response => response.data);
    },
    follow(id){
        return  instanse
            .post(`follow/${id}`, null).then(response => response.data);
    }
}

export const profileAPI = {
    getProfile(userId){
        return  instanse
            .get(`profile/${userId}`).then(response => response.data);
    }
}
export const authAPI = {
    loginMe(){
        return  instanse
            .get(`auth/me`).then(response => response.data);
    }
}