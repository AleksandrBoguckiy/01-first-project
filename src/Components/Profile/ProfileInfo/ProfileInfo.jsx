import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <img className={s.header} src='https://static5.depositphotos.com/1037262/521/i/950/depositphotos_5215941-stock-photo-road-panorama.jpg' />
            <div>
                <img className={s.avatar} src={require('./../avatar.png')} />
            </div>
        </div>
    )
}

export default ProfileInfo;