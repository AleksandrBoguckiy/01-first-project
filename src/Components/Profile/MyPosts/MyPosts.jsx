import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {

    let postElements =
        props.posts.map(p => <Post massage={p.message} like={p.like} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={style.posts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} placeholder={'Anything new?'}
                              value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost} className={style.btn + " " + style.btn1}>Add post</button>
                </div>
                { postElements }
            </div>
        </div>
    )
}

export default MyPosts;