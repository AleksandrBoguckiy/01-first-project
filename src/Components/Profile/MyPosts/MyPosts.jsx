import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.posts}>
            My posts
            <div>
                <textarea></textarea>
                <button className={s.btn + " " + s.btn1}>Add post</button>
                <Post massage = 'Hey, how are you?' like = '15' />
                <Post massage = "It's my first post!" like = '23' />
            </div>
        </div>
    )
}

export default MyPosts;