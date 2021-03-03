import React from 'react';
import {sendMessageActionCreator, updateSendMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState();

    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let onMessageChange = (text) => {
        let action = updateSendMessageTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (<Dialogs
        updateSendMessageText={onMessageChange}
        sendMessage={sendMessage}
        dialogs={state.dialogsPage.dialogs}
        messages={state.dialogsPage.messages}
        dialogsPage={state.dialogsPage}
        />)
}

export default DialogsContainer;