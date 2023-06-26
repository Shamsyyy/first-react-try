import axios from "axios";
import {ProfileType} from "../types/types";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "1e4e1ee5-d9db-4ee1-bf3a-1f37f9c9664d"
    }
});


export const usersAPI = {
    getUsers(currentPage: number, pageSize: number){
        return  instance
            .get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    unfollow(userId: number){
        return  instance
            .delete(`follow/${userId}`);
    },
    follow(userId: number){
        return  instance
            .post(`follow/${userId}`);
    },
    getProfile(userId: number){
        console.warn('Obsolete method. Please profileAPI object.')
        return  profileAPI.getProfile(userId);
    },

}

export const profileAPI = {
    getProfile(userId: number){
        if (userId === null) {
            return null;
        }
        return  instance
            .get(`profile/${userId}`).then(response => response.data);
    },
    getStatus(userId: number){
        if (userId === null) {
            return null;
        }
        return instance
            .get(`profile/status/` + userId);
    },
    updateStatus(status: string) {
        return instance
            .put(`profile/status`, { status: status })
    },
    savePhoto(file: any) {
        const formData = new FormData();
        formData.append("image", file)
        return instance
            .put(`profile/photo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
    },
    saveProfile(profile: ProfileType) {
        return instance
            .put(`profile`, profile)
    }

}

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}
export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10,
}


type LoginMeResponseType = {
    data: { id: number, email: string, login: string },
    resultCode: ResultCodesEnum,
    messages: Array<string>
}
type LoginResponseType = {
    data: { userId: number },
    resultCode: ResultCodesEnum | ResultCodeForCaptcha,
    messages: Array<string>
}

export const authAPI = {
    loginMe(){
        return  instance
            .get<LoginMeResponseType>(`auth/me`);
    },
    login(email: string, password: string, rememberMe :boolean = false, captcha: null | string = null){
        return  instance
            .post<LoginResponseType>(`auth/login`, {email, password, rememberMe, captcha});
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
