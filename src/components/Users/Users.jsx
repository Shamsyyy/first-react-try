import React from "react";
import classes from "./Users.module.css"
import axios from "axios";
import userPhoto from "../../assets/image/user.png"

class Users extends React.Component {
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

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        let curP = this.props.currentPage;               //Карусель массива номеров страниц
        let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;  //Begin
        let curPL = curP + 5;                            //End
        let slicedPages = pages.slice( curPF, curPL);    //сделано через Array.slice():

        return (
            <div>
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
            </div>
        )
    }
}

export default Users;