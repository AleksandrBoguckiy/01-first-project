import React from 'react';
import style from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id

    return (
        <div className={style.dialog}>
            <NavLink to={path} activeClassName={style.active}><img src='https://avatarko.ru/img/kartinka/5/siluet_4108.jpg' /> {props.name}</NavLink>
        </div>
    );
}

export default DialogItem;