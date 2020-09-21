import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id: '1', message: 'Hey, how are you?', like: '15'},
        {id: '2', message: "It's my first post!", like: '23'},
    ];

    let postElements = posts
        .map(p => <Post massage={p.message} like={p.like} />)

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button className={s.btn + " " + s.btn1}>Add post</button>
                </div>
                { postElements }
            </div>
        </div>
    )
}

export default MyPosts;