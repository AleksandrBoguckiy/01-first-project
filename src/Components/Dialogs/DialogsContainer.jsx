import React from 'react';
import {sendMessageActionCreator, updateSendMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();

                let sendMessage = () => {
                    store.dispatch(sendMessageActionCreator());
                }

                let onMessageChange = (text) => {
                    let action = updateSendMessageTextActionCreator(text);
                    store.dispatch(action);
                }

                return <Dialogs
                    updateSendMessageText={onMessageChange}
                    sendMessage={sendMessage}
                    dialogs={state.dialogsPage.dialogs}
                    messages={state.dialogsPage.messages}
                    dialogsPage={state.dialogsPage}/>
            }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;