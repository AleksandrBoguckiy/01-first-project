let state = {
    profilePage: {
        posts: [
            {id: '1', message: 'Hey, how are you?', like: '15'},
            {id: '2', message: "It's my first post!", like: '23'},
        ]
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
            {id: '3', message: 'Hey, are you there?'}
        ]
    },
    sidebar: {
        myFriends: [
            {id: '1', name: 'Alex'},
            {id: '2', name: 'Romeo'},
            {id: '3', name: 'Nik'},
        ]
    }
}


export default state;