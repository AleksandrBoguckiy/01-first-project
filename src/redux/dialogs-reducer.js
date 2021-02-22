const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_SEND_MESSAGE_TEXT = 'UPDATE-SEND-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: '1', name: 'Oleg'},
        {id: '2', name: 'Egor'},
        {id: '3', name: 'Mariya'},
        {id: '4', name: 'Aleksandr'},
        {id: '5', name: 'Ruslan'},
        {id: '6', name: 'Irina'}
    ],
    messages: [
        {id: '1', message: 'Hi!'},
        {id: '2', message: 'How are you?'},
        {id: '3', message: 'Hey, are you there?'},
        {id: '4', message: 'Hello Friend! Yes I am listening to you'}
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {

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