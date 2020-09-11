import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
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
                <Post massage = 'Hey, how are you?' like = '15' />
                <Post massage = "It's my first post!" like = '23' />
            </div>
        </div>
    )
}

export default MyPosts;