import React from "react";
import classes from './Header.module.scss';
import {NavLink} from "react-router-dom";

export type MapPropsType = {
    isAuth: boolean
    login: string | null
}
export type DispatchPropsType = {

    logout: () => void
}

const Header: React.FC<MapPropsType & DispatchPropsType> = (props) => {
    return (
        <header className={classes.header}>
                <div className={classes.imageItem}>
                    <img src="https://i.ibb.co/J2YMPxR/logo91.png" alt='s'/>
                </div>
                <div className={classes.loginItem}>
                    {props.isAuth
                        ? <div> {props.login} - <button onClick={props.logout}>Log out</button></div>
                        : <NavLink to={'/login'}>Login</NavLink>}

                </div>
        </header>

    )
}

export default Header;