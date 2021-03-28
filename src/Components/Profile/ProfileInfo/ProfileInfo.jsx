import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader';
import Header from '../../../assets/images/header.png';
import Avatar from '../../../assets/images/siluet_4108.jpg';
const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={style.wrapper}>
            <div>
            <img className={style.header} src={Header} alt={'HeaderPicture'}/>
            </div>
            <div className={style.fullUser}>
                {props.profile.fullName}
                <p className={style.aboutMe}>
                    {props.profile.aboutMe}
                </p>
            </div>
            <div>
                <img className={style.avatar} src={props.profile.photos.large != null ? props.profile.photos.large : Avatar} alt={'Avatar'}/>
            </div>
        </div>
    )
}

export default ProfileInfo;