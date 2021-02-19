import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import MessageInput from "./Message/MessageInput/MessageInput";

const Dialogs = (props) => {

    let dialogElements =
        props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

    let messageElements =
        props.dialogsPage.messages.map(m => <Message message={m.message} />);


    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                { dialogElements }
            </div>
            <div className={style.messages}>
                { messageElements }
            </div>
            <MessageInput newMessageText={props.dialogsPage.newMessageText}
                          dispatch={props.dispatch} />
        </div>
    )
}

export default Dialogs;