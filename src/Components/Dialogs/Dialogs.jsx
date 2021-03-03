import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateSendMessageTextActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let dialogElements =
        props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

    let messageElements =
        props.dialogsPage.messages.map(m => <Message message={m.message} />);

    let newMessage = React.createRef();

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    let onMessageChange = () => {
        let text = newMessage.current.value;
        let action = updateSendMessageTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                { dialogElements }
            </div>
            <div className={style.messages}>
                { messageElements }
            </div>
            <div className={style.inputForm}>
                <div>
                    <textarea onChange={onMessageChange} ref={newMessage} placeholder={'Write a message...'} value={props.newMessageText} />
                </div>
                <div>
                    <button onClick={sendMessage} className={style.btn + " " + style.btn1}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;