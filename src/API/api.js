import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "1e4e1ee5-d9db-4ee1-bf3a-1f37f9c9664d"
    }
});


export const usersAPI = {
    getUsers(currentPage, pageSize){
        return  instance
            .get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    unfollow(userId){
        return  instance
            .delete(`follow/${userId}`);
    },
    follow(userId){
        return  instance
            .post(`follow/${userId}`);
    },
    getProfile(userId){
        console.warn('Obsolete method. Please profileAPI object.')
        return  profileAPI.getProfile(userId);
    },

}

export const profileAPI = {
    getProfile(userId){
        if (userId === null) {
            return null;
        }
        return  instance
            .get(`profile/${userId}`).then(response => response.data);
    },
    getStatus(userId){
        if (userId === null) {
            return null;
        }
        return instance
            .get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance
            .put(`profile/status`, { status: status })
    },
    savePhoto(file) {
        const formData = new FormData();
        formData.append("image", file)
        return instance
            .put(`profile/photo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
    },
    saveProfile(profile) {
        return instance
            .put(`profile`, profile)
    }

}

export const authAPI = {
    loginMe(){
        return  instance
            .get(`auth/me`);
    },
    login(email, password, rememberMe = false, captcha = null){
        return  instance
            .post(`auth/login`, {email, password, rememberMe, captcha});
    },
    logout(){
        return  instance
            .delete(`auth/login`);
    },
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance
            .get(`security/get-captcha-url`);
    }
}