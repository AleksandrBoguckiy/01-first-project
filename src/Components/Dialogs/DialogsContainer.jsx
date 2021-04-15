import {sendMessageActionCreator, updateSendMessageTextActionCreator} from "../../redux/dialogs-reducer";
import AuthRedirectComponent from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {

    return{
        dialogsPage: state.dialogsPage,
        messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialogs,
        isAuth: state.auth.isAuth
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;