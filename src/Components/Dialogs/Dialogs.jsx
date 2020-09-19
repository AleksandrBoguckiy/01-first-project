import React from 'react';
import s from './Dialogs.module.css';
import Navbar from "../Navbar/Navbar";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {

    return (
        <div className={s.messages}>
            <img src='https://avatarko.ru/img/kartinka/5/siluet_4108.jpg' /> {props.message}
        </div>
    );
}
const Dialogs = (props) => {

    let dialogsData = [
        {name: 'Oleg', id: '1'},
        {name: 'Egor', id: '2'},
        {name: 'Mariya', id: '3'},
        {name: 'Aleksandr', id: '4'},
        {name: 'Ruslan', id: '5'},
        {name: 'Irina', id: '6'}
    ];

    let messagesData = [
        {message: 'Hi!'},
        {message: 'How are you?'},
        {message: 'Hey, are you there?'}
    ];

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
            </div>
        </div>
    )
}

export default Dialogs;