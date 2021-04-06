import React from "react";
import style from './Users.module.css';
import userPhoto from "../../assets/images/siluet_4108.jpg"
import {NavLink} from "react-router-dom";
import {followAPI} from "../../api/api";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = Math.max(props.currentPage - 5, 1); i <= Math.max(1,
        Math.min(props.currentPage + 5, pagesCount)); i++) {
        pages.push(i);
    }

        return <div className={style.users}>
            <h2>Users</h2>
            <div className={style.pageItems}>
                {pages.map(p => {
                    return <span className={props.currentPage === p && style.selectedPage} key={p.id}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div className={style.wrapper} key={u.id}>
                <span>
                    <div className={style.avatar}>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt='Avatar'/>
                        </NavLink>
                    </div>
                    <div className={style.btn}>
                        {u.followed
                            ? <button className={style.btn1 + " " + style.btn2} onClick={() => {
                                followAPI.unFollow(u.id).then(data => {
                                        if (data.resultCode === 0) {
                                            props.unFollow(u.id)
                                        }
                                    });
                            }}>Unfollow</button>
                            : <button className={style.btn1 + " " + style.btn2} onClick={() => {
                                followAPI.follow(u.id).then(data => {
                                        if (data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    });
                            }}>Follow</button>}
                    </div>
                </span>
                    <span className={style.data}>
                    <span>
                        <NavLink to={'/profile/' + u.id} style={{textDecoration: 'none'}}>
                        <div className={style.data_name}>{u.name}</div>
                        </NavLink>
                        <div>{u.status !=null ? u.status : 'status not set'}</div>
                    </span>
                    <span>
                        <div>{'country'}</div>
                        <div>{'city'}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    }

export default Users;
