const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    posts: [
        {id: '1', message: 'Hey, how are you?', like: '15'},
        {id: '2', message: "It's my first post!", like: '23'},
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD-POST':
            let newPost = {id: 3, message: state.newPostText, like: 2};
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ('')
            };
            case 'UPDATE-NEW-POST-TEXT':
                return {
                    ...state,
                    newPostText: action.newText
                };
        case 'SET-USER-PROFILE':
            return {
                ...state,
                profile: action.profile
            };
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export default profileReducer;