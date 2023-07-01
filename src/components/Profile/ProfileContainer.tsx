import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
    getStatus,
    getUserProfile,
    savePhoto,
    saveProfile,
    updateStatus,
} from '../../redux/profileReducer';
import Profile from './Profile';
import withRouter, {WrappedProps} from '../../hoc/withRouter';
import {AppStateType} from "../../redux/reduxStore";
import {ProfileType} from "../../types/types";

type MapStateToPropsType = {
    profile: ProfileType,
    status: string,
    authorizedUserId: number,
    isAuth: boolean,
    userId: string | undefined
}

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    getUserProfile: (userId: number) => void,
    getStatus: (userId: number) => void,
    updateStatus: (status: string) => void,
    savePhoto: (file: import("buffer").File) => void,
    saveProfile: (formData: ProfileType) => Promise<any>,

}
type PropsType = MapPropsType & DispatchPropsType & WrappedProps

const ProfileContainer: React.FC<MapStateToPropsType & DispatchPropsType & WrappedProps> = (props) => {
    const refreshProfile = ()  => {
        console.log('refreshProfile');

        // @ts-ignore todo: fix this bug "props.router.params.userId"
        let userId = props.router.params.userId ;
        if (!userId) {
            userId = props.authorizedUserId;
            if (!userId) {
                props.router.navigate('/login');
            }
        }
        if (!userId) {
            console.error("ID should exits in URI params or in state('authorizedUserId')")
        } else {
            props.getUserProfile(userId);
            props.getStatus(userId);
        }

    };


    useEffect(() => {
        refreshProfile();
        // @ts-ignore todo: fix this bug "props.router.params.userId"
    }, [props.router.params.userId]);

    return (
        <Profile
            {...props}
            // @ts-ignore todo: fix this bug "props.router.params.userId"
            isOwner={!props.router.params.userId}
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
            savePhoto={props.savePhoto}
            saveProfile={props.saveProfile}
        />
    );
};

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profileReducer.profile,
    status: state.profileReducer.status,
    authorizedUserId: state.authReducer.id,
    isAuth: state.authReducer.isAuth,
});

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfile,
        getStatus,
        updateStatus,
        savePhoto,
        saveProfile,
    }),
    withRouter
)(ProfileContainer);