import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
        {message: 'Hey, how are you?', like: '15'},
        {message: "It's my first post!", like: "23"},
    ];

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
                <Post massage={postsData[0].message} like={postsData[0].like} />
                <Post massage={postsData[1].message} like={postsData[1].like} />
            </div>
        </div>
    )
}

export default MyPosts;