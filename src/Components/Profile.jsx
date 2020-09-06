import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
        <img src='https://www.onetwotrip.com/ru/blog/wp-content/uploads/2020/02/bali.jpg'/>
        <div>
            <img
                src='https://reallycom.ru/wp-content/uploads/2019/09/minecraft_youtube_avatar__speedycraft_by_bustedgun-d6ktkgl-e1567631489917.jpg'/>
        </div>
        <div>
            My posts
            <div>
                New posts
            </div>
            <div className='posts'>
                <div className={s.item}>
                    Post 1
                </div>
                <div className={s.item}>
                    Post 2
                </div>
            </div>
        </div>
    </div>;
}

export default Profile;