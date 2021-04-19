import {sendMessageActionCreator, updateSendMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Dialogs from "./Dialogs";
import {compose} from "redux";

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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
) (Dialogs);