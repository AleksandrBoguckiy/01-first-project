import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {

    return (
        <div className={s.messages}>
            <img src='https://avatarko.ru/img/kartinka/5/siluet_4108.jpg' /> {props.message}
        </div>
    );
}

export default Message;