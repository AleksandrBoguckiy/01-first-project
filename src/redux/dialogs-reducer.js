const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_SEND_MESSAGE_TEXT = 'UPDATE-SEND-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case 'SEND-MESSAGE':
            let sendMessage = {
                id: 5,
                message: state.newMessageText
            }
            state.messages.push(sendMessage)
            state.newMessageText = ('')
            return state;
        case 'UPDATE-SEND-MESSAGE-TEXT':
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateSendMessageTextActionCreator = (text) => ({type: UPDATE_SEND_MESSAGE_TEXT, newText: text});

export default dialogsReducer;