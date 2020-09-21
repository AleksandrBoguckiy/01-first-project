import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {

    let dialogs = [
        {id: '1', name: 'Oleg'},
        {id: '2', name: 'Egor'},
        {id: '3', name: 'Mariya'},
        {id: '4', name: 'Aleksandr'},
        {id: '5', name: 'Ruslan'},
        {id: '6', name: 'Irina'}
    ];

    let dialogElements = dialogs
        .map(d => <DialogItem name={d.name} id={d.id} />);

    let messages = [
        {id: '1', message: 'Hi!'},
        {id: '2', message: 'How are you?'},
        {id: '3', message: 'Hey, are you there?'}
    ];

    let messageElements = messages
        .map(m => <Message message={m.message} />);

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