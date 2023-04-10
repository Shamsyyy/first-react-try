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
import { withRouter } from '../../hoc/withRouter';

const ProfileContainer = (props) => {
    const refreshProfile = () => {
        console.log('refreshProfile');
        let userId = props.router.params.userId;
        if (!userId) {
            userId = props.authorizedUserId;
            if (!userId) {
                props.router.navigate('/login');
            }
        }
        props.getUserProfile(userId);
        props.getStatus(userId);
    };

    useEffect(() => {
        refreshProfile();
    }, [props.router.params.userId]);

    return (
        <Profile
            {...props}
            isOwner={!props.router.params.userId}
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
            savePhoto={props.savePhoto}
            saveProfile={props.saveProfile}
        />
    );
};

let mapStateToProps = (state) => ({
    profile: state.profileReducer.profile,
    status: state.profileReducer.status,
    authorizedUserId: state.authReducer.id,
    isAuth: state.authReducer.isAuth,
});

export default compose(
    connect(mapStateToProps, {
        getUserProfile,
        getStatus,
        updateStatus,
        savePhoto,
        saveProfile,
    }),
    withRouter
)(ProfileContainer);