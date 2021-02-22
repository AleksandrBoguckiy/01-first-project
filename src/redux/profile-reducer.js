const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: '1', message: 'Hey, how are you?', like: '15'},
        {id: '2', message: "It's my first post!", like: '23'},
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: 3,
                message: state.newPostText,
                like: 2
            }
            state.posts.push(newPost)
            state.newPostText = ('')
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;