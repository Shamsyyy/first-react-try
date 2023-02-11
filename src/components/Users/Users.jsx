import React from "react";
import classes from "./Users.module.css"

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/No_avatar.png',
                    followed: false,
                    fullName: 'Daur',
                    status: 'im learning react',
                    location: {city: 'SPB', country: 'Russia'}
                },
                {
                    id: 2,
                    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/No_avatar.png',
                    followed: true,
                    fullName: 'Diana',
                    status: 'im learning swift',
                    location: {city: 'Kazan', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/No_avatar.png',
                    followed: false,
                    fullName: 'Dmitry',
                    status: 'Yoyoyo',
                    location: {city: 'Minsk', country: 'Belarus'}
                }
            ]
        )
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={classes.userPhoto}/>
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => { props.unfollow(u.id)} }>Unfollow</button>
                                    : <button onClick={() => { props.follow(u.id)} }>Follow</button>
                            }

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>

                </div>)
            }
        </div>
    )
}

export default Users;