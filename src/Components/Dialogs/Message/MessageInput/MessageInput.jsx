import React from "react";
import style from './MessageInput.module.css';

const MessageInput = (props) => {

    let newMessage = React.createRef();

    let sendMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.updateSendMessageText(text);
    }

    return (
        <div className={style.inputForm}>
            <div>
                <textarea onChange={onMessageChange} ref={newMessage} placeholder={'Write a message...'} value={props.newMessageText} />
            </div>
            <div>
                <button onClick={sendMessage} className={style.btn + " " + style.btn1}>Send massage</button>
            </div>
        </div>
    )
}
export default MessageInput;