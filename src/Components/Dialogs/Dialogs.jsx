import React from 'react';
import s from './Dialogs.module.css';
import Navbar from "../Navbar/Navbar";
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/1' activeClassName={s.active}>Oleg</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2' activeClassName={s.active}>Egor</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3' activeClassName={s.active}>Mariya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4' activeClassName={s.active}>Aleksandr</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5' activeClassName={s.active}>Ruslan</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/6' activeClassName={s.active}>Irina</NavLink>
                </div>
            </div>
            <div className={s.massages}>
                <div className={s.massage}>
                    <img src='https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png' />
                    Hi!
                </div>
                <div className={s.massage}>
                    <img src='https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png' />
                    How are you?
                </div>
                <div className={s.massage}>
                    <img src='https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png' />
                    Hey, are you there?
                </div>
            </div>
        </div>
    )
}

export default Dialogs;