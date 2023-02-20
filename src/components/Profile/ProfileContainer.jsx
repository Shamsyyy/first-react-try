import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profileReducer";
import {withRouter} from "../../hoc/withRoutert";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) { userId=2; }
        this.props.getUserProfile(userId);
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profileReducer.profile,
});

/*//HOC
let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

connect(mapStateToProps, {
    getUserProfile
})(withRouter(WithUrlDataContainerComponent))*/
export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
)(ProfileContainer);