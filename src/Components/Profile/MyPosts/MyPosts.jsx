import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElements =
        props.posts.map(p => <Post massage={p.message} like={p.like} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert (text);
    };

    return (
        <div className={style.posts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} placeholder={'Anything new?'}></textarea>
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