import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/reduxStore";

let mapStateToPropsForRedirect = (state: AppStateType) => ({
    isAuth: state.authReducer.isAuth
} as MapPropsType);

type MapPropsType = {
    isAuth: boolean
}
type DispatchPropsType = {
}

export function withAuthRedirect<WCP>(Component: any) {
    const RedirectComponent: React.FC<MapPropsType & DispatchPropsType> = (props) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Navigate to={"/Login"}/>;
        return <Component {...restProps as WCP}/>
    }

    return connect<MapPropsType, DispatchPropsType,WCP, AppStateType>(mapStateToPropsForRedirect, {})(RedirectComponent)
}