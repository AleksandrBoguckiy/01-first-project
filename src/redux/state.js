let store = {
    _state: {
        profilePage: {
            posts: [
                {id: '1', message: 'Hey, how are you?', like: '15'},
                {id: '2', message: "It's my first post!", like: '23'},
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        sidebar: {
            myFriends: [
                {id: '1', name: 'Alex'},
                {id: '2', name: 'Romeo'},
                {id: '3', name: 'Nik'}
            ]
        }
    },

    _callSubscriber () {
        console.log('State changed')
    },

    getState() {
        return this._state
    },

    addPost () {
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            like: 2
        };
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ('')
        this._callSubscriber(this._state);
    },

    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    sendMessage () {
        let sendMessage = {
            id: 5,
            message: this._state.dialogsPage.newMessageText
        };
        this._state.dialogsPage.messages.push(sendMessage)
        this._state.dialogsPage.newMessageText = ('')
        this._callSubscriber(this._state);
    },

    updateSendMessageText (newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },

    subscribe (observer) {
        this._callSubscriber = observer;
    }
}

export default store;
window.store = store;