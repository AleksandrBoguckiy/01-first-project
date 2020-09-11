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
            {props.message}
        </div>
    );
}
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name='Oleg' id='1' />
                <DialogItem name='Egor' id='2' />
                <DialogItem name='Mariya' id='3' />
                <DialogItem name='Aleksandr' id='4' />
                <DialogItem name='Ruslan' id='5' />
                <DialogItem name='Irina' id='6' />
            </div>
            <div className={s.messages}>
                <Message message='Hi!' />
                <Message message='How are you?' />
                <Message message='Hey, are you there?' />
            </div>
        </div>
    )
}

export default Dialogs;