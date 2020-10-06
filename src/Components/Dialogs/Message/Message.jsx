import React from 'react';
import style from './../Dialogs.module.css';

const Message = (props) => {

    return (
        <div className={style.messages}>
            <img src='https://avatarko.ru/img/kartinka/5/siluet_4108.jpg'/> {props.message}
        </div>
    );
}

export default Message;