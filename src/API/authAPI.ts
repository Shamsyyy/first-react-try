import {instance, APIResponseType, ResultCodeForCaptchaEnum, ResultCodesEnum} from "./api";

type LoginMeResponseDataType = {
    id: number,
    email: string,
    login: string
}
type LoginResponseDataType = {
     userId: number
}
export const authAPI = {
    loginMe() {
        return instance
            .get<APIResponseType<LoginMeResponseDataType>>(`auth/me`);
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: null | string = null) {
        return instance
            .post<APIResponseType<LoginResponseDataType, ResultCodesEnum | ResultCodeForCaptchaEnum>>(`auth/login`, {email, password, rememberMe, captcha});
    },
    logout() {
        return instance
            .delete(`auth/login`);
    },
}