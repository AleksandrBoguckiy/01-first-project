import {sendMessageActionCreator, updateSendMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    debugger;
    return{
        dialogsPage: state.dialogsPage,
        messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialogs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        updateSendMessageText: (text) => {
            let action = updateSendMessageTextActionCreator(text);
            dispatch(action)
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;