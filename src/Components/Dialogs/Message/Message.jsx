import React from 'react';
import style from './../Dialogs.module.css';

const Message = (props) => {

    let newMassage = React.createRef();

    let sendMessage = () => {
        let text = newMassage.current.value;
        alert (text);
    }

    return (
        <div className={style.messages}>
            <img src='https://avatarko.ru/img/kartinka/5/siluet_4108.jpg'/> {props.message}
            <div>
                <div>
                    <textarea ref={newMassage}></textarea>
                </div>
                <div>
                    <button onClick={sendMessage} className={style.btn + " " + style.btn1}>Send massage</button>
                </div>
            </div>
        </div>
    );
}

export default Message;