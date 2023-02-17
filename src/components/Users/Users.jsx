import React from "react";
import classes from "./Users.module.css"
import userPhoto from "../../assets/image/user.png"
import {NavLink} from "react-router-dom";
import axios from "axios";
import {followedAPI} from "../../API/api";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let curP = props.currentPage;                    //Карусель массива номеров страниц
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;  //Begin
    let curPL = curP + 4;                            //End
    let slicedPages = pages.slice(curPF, curPL);    //сделано через Array.slice():


    return (
        <div>
            <div>
                {slicedPages.map(p => {              //заменено pages.map(***)  на slicedPages.map(***)
                    return (
                        <span
                            className={props.currentPage === p && classes.selectedPage}
                            onClick={() => {
                                props.onPageChanged(p)
                            }}> {p} </span>
                    )
                })}
            </div>
            {

                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={"/profile/" + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                     className={classes.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => {
                                        followedAPI.unFollow(u.id) //get API
                                            .then(data => {
                                                if (data.resultCode === 0) {
                                                    props.unfollow(u.id)
                                                }
                                            });
                                    }}>Unfollow</button>

                                    : <button onClick={() => {
                                        followedAPI.follow(u.id) //get API
                                            .then(data => {
                                                if (data.resultCode === 0) {
                                                    props.follow(u.id)
                                                }
                                            });
                                    }}>Follow</button>
                            }

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>

                </div>)
            }
        </div>
    )
}

export default Users;