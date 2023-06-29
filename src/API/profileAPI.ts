import {PhotosType, ProfileType} from "../types/types";
import {instance, APIResponseType} from "./api";

type SavePhotoResponseDataType = {
    photos: PhotosType
}

export const profileAPI = {
    getProfile(userId: number ) {
        if (userId === null) {
            return null;
        }
        return instance
            .get<ProfileType>(`profile/${userId}`).then(response => response.data);
    },
    getStatus(userId: number) {
        if (userId === null) {
            return null;
        }
        return instance
            .get<string>(`profile/status/` + userId);
    },
    savePhoto(file: File) {
        const formData = new FormData();
        formData.append("image", file)
        return instance
            .put<APIResponseType<SavePhotoResponseDataType>>(`profile/photo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
    },
    updateStatus(status: string) {
        return instance
            .put<APIResponseType>(`profile/status`, {status: status})
    },
    saveProfile(profile: ProfileType) {
        return instance
            .put<APIResponseType>(`profile`, profile)
    }

}