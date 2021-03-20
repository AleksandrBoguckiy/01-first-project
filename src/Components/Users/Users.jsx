import React from "react";
import style from './Users.module.css';
import *as axios from "axios";
import userPhoto from "../../assets/images/siluet_4108.jpg"

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged(pageNumber) {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);

        let pages = [];
        for (let i=Math.max(this.props.currentPage - 5, 1); i <= Math.max(1, Math.min(this.props.currentPage + 5, pagesCount)); i++) {
            pages.push(i);
        }

        return <div className={style.users}>
            <h2>Users</h2>
            <div className={style.pageItems}>
                { pages.map (p => {
                return <span className={this.props.currentPage === p && style.selectedPage}
                             onClick={(e) => {this.onPageChanged(p)}}>{p}</span>
            })}
            </div>
            {
                this.props.users.map(u => <div className={style.wrapper} key={u.id}>
                <span>
                    <div className={style.avatar}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt='Avatar'/>
                    </div>
                    <div className={style.btn}>
                        {u.followed
                            ? <button className={style.btn1 + " " + style.btn2} onClick={() => {
                                this.props.unFollow(u.id)
                            }}>Unfollow</button>
                            : <button className={style.btn1 + " " + style.btn2} onClick={() => {
                                this.props.follow(u.id)
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
            <div className={style.pageItems}>
                { pages.map (p => {
                    return <span className={this.props.currentPage === p && style.selectedPage}
                                 onClick={(e) => {this.onPageChanged(p)}}>{p}</span>
                })}
            </div>
        </div>
    }
}

export default Users;
