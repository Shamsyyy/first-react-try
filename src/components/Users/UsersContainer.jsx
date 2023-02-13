import React from "react";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUserAC, unfollowAC} from "../../redux/usersReducer";
import axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)  //get API
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }
    onPageChanged = (currentPage) => {
        this.props.setCurrentPage(currentPage);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)  //get API
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        return (
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
            /*<div>
                <div>
                    {slicedPages.map(p => {              //заменено pages.map(***)  на slicedPages.map(***)
                        return (
                            <span
                                className={this.props.currentPage === p && classes.selectedPage}
                                onClick={() => { this.onPageChanged(p) }}> {p} </span>
                        )
                    })}
                </div>
                {

                    this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                 className={classes.userPhoto}/>
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => {
                                        this.props.unfollow(u.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        this.props.follow(u.id)
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
            </div>*/
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
    }

};
let mapDispatchToProps = (dispatch) => {
    return{
        follow: (userId) => {
            dispatch(followAC(userId))
        },

        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },

        setUsers: (users) => {
            dispatch(setUserAC(users))
        },

        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },

        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
