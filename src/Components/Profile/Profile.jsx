import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <img src='https://www.onetwotrip.com/ru/blog/wp-content/uploads/2020/02/bali.jpg'/>
            <div>
                <img
                    src='https://reallycom.ru/wp-content/uploads/2019/09/minecraft_youtube_avatar__speedycraft_by_bustedgun-d6ktkgl-e1567631489917.jpg'/>
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;