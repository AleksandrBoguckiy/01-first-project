import React from 'react';
import style from './MyPosts.module.css';

const MyPosts = (props) => {

    return (
        <div className={style.posts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button className={style.btn + " " + style.btn1}>Add post</button>
                </div>
                { props.posts }
            </div>
        </div>
    )
}

export default MyPosts;