import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
            <img className={style.header} src='https://static5.depositphotos.com/1037262/521/i/950/depositphotos_5215941-stock-photo-road-panorama.jpg' alt={'HeaderPicture'}/>
            </div>
            <div>
                <img className={style.avatar} src={props.profile.photos.large} alt={'Avatar'}/>
            </div>
        </div>
    )
}

export default ProfileInfo;