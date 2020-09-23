import React from 'react';
import style from './MyFriends.module.css';

const MyFriends = (props) => {

    return (
        <div className={style.friends}>
            <div>
                <img src='https://avatarko.ru/img/kartinka/5/siluet_4108.jpg'/> {props.name}
            </div>
        </div>
    );
}

export default MyFriends;