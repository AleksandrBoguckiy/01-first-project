import React from "react";
import style from './MessageInput.module.css';

const MessageInput = (props) => {

    let newMassage = React.createRef();

    let sendMessage = () => {
        let text = newMassage.current.value;
        alert(text);
    }
    return (
        <div className={style.inputForm}>
            <div>
                <textarea ref={newMassage} placeholder={'Write a message...'}></textarea>
            </div>
            <div>
                <button onClick={sendMessage} className={style.btn + " " + style.btn1}>Send massage</button>
            </div>
        </div>
    )
}
export default MessageInput;