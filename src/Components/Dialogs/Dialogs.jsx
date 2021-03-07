import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    debugger;

    let dialogElements =
        props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);

    let messageElements =
        props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id} />);

    let newMessage = React.createRef();

    let sendMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.updateSendMessageText(text);
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
                    <textarea onChange={onMessageChange} ref={newMessage} placeholder={'Write a message...'} value={props.dialogsPage.newMessageText} />
                </div>
                <div>
                    <button onClick={sendMessage} className={style.btn + " " + style.btn1}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;