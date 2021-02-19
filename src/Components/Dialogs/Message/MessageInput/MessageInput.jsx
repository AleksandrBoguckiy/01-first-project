import React from "react";
import style from './MessageInput.module.css';

const MessageInput = (props) => {

    let newMessage = React.createRef();

    let sendMessage = () => {
        props.dispatch({ type: 'SEND-MESSAGE'});
    }

    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.dispatch({ type: 'UPDATE-SEND-MESSAGE-TEXT', newText: text });
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