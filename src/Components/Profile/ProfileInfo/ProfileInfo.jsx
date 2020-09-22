import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <img className={style.header} src='https://static5.depositphotos.com/1037262/521/i/950/depositphotos_5215941-stock-photo-road-panorama.jpg' />
            <div>
                <img className={style.avatar} src={require('./../avatar.png')} />
            </div>
        </div>
    )
}

export default ProfileInfo;