import React from 'react';
import style from './Dialogs.module.css';

const Dialogs = (props) => {

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                { props.dialogs }
            </div>
            <div className={style.messages}>
                { props.messages }
            </div>
        </div>
    )
}

export default Dialogs;