let rerenderEntireTree = () => {

}

let state = {
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
}

export const addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        like: 2
    };
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ('')
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const sendMessage = () => {
    let sendMessage = {
        id: 5,
        message: state.dialogsPage.newMessageText
    };
    state.dialogsPage.messages.push(sendMessage)
    state.dialogsPage.newMessageText = ('')
    rerenderEntireTree(state);
}

export const updateSendMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;