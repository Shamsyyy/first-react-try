import React from "react";
import Header, {DispatchPropsType, MapPropsType} from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/authReducer";
import {AppStateType} from "../../redux/reduxStore";


const HeaderContainer: React.FC<MapPropsType & DispatchPropsType>=(props) => {
    return (
        <Header {...props} />
    )
}
const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login,
});

export default connect<MapPropsType, DispatchPropsType,{}, AppStateType>
(mapStateToProps,  {logout})(HeaderContainer);