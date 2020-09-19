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
        {id: '1', name: 'Oleg'},
        {id: '2', name: 'Egor'},
        {id: '3', name: 'Mariya'},
        {id: '4', name: 'Aleksandr'},
        {id: '5', name: 'Ruslan'},
        {id: '6', name: 'Irina'}
    ];

    let dialogElements = dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesData = [
        {id: '1', message: 'Hi!'},
        {id: '2', message: 'How are you?'},
        {id: '3', message: 'Hey, are you there?'}
    ];

    let messageElements = messagesData
        .map(message => <Message message={message.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                { dialogElements }
            </div>
            <div className={s.messages}>
                { messageElements }
            </div>
        </div>
    )
}

export default Dialogs;