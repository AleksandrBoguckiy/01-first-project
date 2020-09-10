import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <img className={s.header} src='https://www.onetwotrip.com/ru/blog/wp-content/uploads/2020/02/bali.jpg' />
            <div>
                <img className={s.avatar} src={require('./avatar.png')} />
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;