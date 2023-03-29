import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profileReducer";
import {withRouter} from "../../hoc/withRouter";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    refreshProfile() {
        console.log("refreshProfile")
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId=this.props.authorizedUserId;
            if (!userId) {
                this.props.router.navigate('/login');
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.router.params.userId !== prevProps.router.params.userId) {
            this.refreshProfile()
        }
    }

    render() {

        return (
            <Profile {...this.props}
                     isOwner={!this.props.router.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}
                     saveProfile={this.props.saveProfile}/>


        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profileReducer.profile,
    status: state.profileReducer.status,
    authorizedUserId: state.authReducer.id,
    isAuth: state.authReducer.isAuth
});

/*//HOC
let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

connect(mapStateToProps, {
    getUserProfile
})(withRouter(WithUrlDataContainerComponent))*/
export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
)(ProfileContainer);