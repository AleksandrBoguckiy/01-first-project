import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import MyFriends from "../MyFriends/MyFriends";

const Navbar = (props) => {
    let myFriends =
        props.sidebar.myFriends.map(f => <MyFriends name={f.name} key={f.id} id={f.id} />);

    return (
        <nav className={style.nav}>
            <div className={`${style.item} ${style.active}`}>
                <NavLink to='/profile' activeClassName={style.active}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/users' activeClassName={style.active}>Users</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/dialogs' activeClassName={style.active}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/news' activeClassName={style.active}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/music' activeClassName={style.active}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/settings' activeClassName={style.active}>Settings</NavLink>
            </div>
            <div className={`${style.item} ${style.myFriends}`}>
                <NavLink to='/myfriends' activeClassName={style.active}>My Friends</NavLink>
                {myFriends}
            </div>
        </nav>
    );
}

export default Navbar;