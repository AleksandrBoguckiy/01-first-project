import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog}>
                    Oleg
                </div>
                <div className={s.dialog}>
                    Egor
                </div>
                <div className={s.dialog}>
                    Mariya
                </div>
                <div className={`${s.dialog} ${s.active}`}>
                    Aleksandr
                </div>
                <div className={s.dialog}>
                    Ruslan
                </div>
                <div className={s.dialog}>
                    Irina
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