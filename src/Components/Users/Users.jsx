import React from "react";
import style from './Users.module.css';
import userPhoto from "../../assets/images/siluet_4108.jpg"

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
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt='Avatar'/>
                    </div>
                    <div className={style.btn}>
                        {u.followed
                            ? <button className={style.btn1 + " " + style.btn2} onClick={() => {
                                props.unFollow(u.id)
                            }}>Unfollow</button>
                            : <button className={style.btn1 + " " + style.btn2} onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                    <span className={style.data}>
                    <span>
                        <div className={style.data_name}>{u.name}</div>
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
