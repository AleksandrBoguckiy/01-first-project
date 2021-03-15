import React from "react";
import style from './Users.module.css';
import *as axios from "axios";
import userPhoto from "../../assets/images/siluet_4108.jpg"

const Users = (props) => {

    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items);
        });
    }

    return <div className={style.users}>
        <h2>Users</h2>
        {
            props.users.map(u => <div className={style.wrapper} key={u.id}>
                <span>
                    <div className={style.avatar}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt='Avatar'/>
                    </div>
                    <div className={style.divbtn}>
                        {u.followed
                            ? <button className={style.btn + " " + style.btn1} onClick={() => {
                                props.unFollow(u.id)
                            }}>Unfollow</button>
                            : <button className={style.btn + " " + style.btn1} onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span className={style.data}>
                    <span className={style.data1}>
                        <div>{u.name}</div>
                        <div>{"u.status"}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}
export default Users;